// src/components/NewsletterModal.tsx
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, User as UserIcon, CheckCircle2, Sparkles, BellRing } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Props = { onClose: () => void };

const FADE_MS = 180;

const NewsletterModal: React.FC<Props> = ({ onClose }) => {
  // ------- Fade / lifecycle -------
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimer = useRef<number | null>(null);

  // ------- Width drag (desktop only) -------
  const [widthPx, setWidthPx] = useState<number>(() => {
    if (typeof window === 'undefined') return 980;
    const vw = Math.min(window.innerWidth, 1600);
    return Math.max(720, Math.round(vw * 0.82));
  });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const max = Math.min(vw - 24, 1500);
      const min = 680;
      const next = Math.min(max, Math.max(min, e.clientX - (vw - widthPx) / 2));
      setWidthPx(next);
    };
    const onUp = () => {
      if (!dragging) return;
      setDragging(false);
      document.body.style.userSelect = '';
      document.documentElement.style.cursor = '';
    };
    if (dragging) {
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      document.body.style.userSelect = 'none';
      document.documentElement.style.cursor = 'ew-resize';
    }
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
  }, [dragging, widthPx]);

  // ESC to close + lock body scroll + enter fade
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && handleClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; // no page scroll beneath modal
    const raf = requestAnimationFrame(() => setIsOpen(true));
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      cancelAnimationFrame(raf);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
      document.documentElement.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, []);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setIsOpen(false);
    closeTimer.current = window.setTimeout(() => onClose(), FADE_MS);
  };

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const safeWidth = Math.min(widthPx, vw - 24);

  // ------- Form state -------
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState(''); // honeypot
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  // Same-origin in prod; env override in dev
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  const isProd = /(^|\.)ogopogosolar\.ca$/i.test(host);
  const SUBSCRIBE_URL = isProd
    ? '/api/newsletter/subscribe.php'
    : (import.meta as any).env?.VITE_NEWSLETTER_SUBSCRIBE_URL ??
      'https://ogopogosolar.ca/api/newsletter/subscribe.php';

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp.trim() !== '') return;
    if (!name.trim()) { setStatus('error'); setMessage('Please enter your name.'); return; }
    if (!validEmail(email)) { setStatus('error'); setMessage('Please enter a valid email address.'); return; }

    try {
      setStatus('loading'); setMessage('');
      const body = new URLSearchParams({ name: name.trim(), email: email.trim() }).toString();
      const res = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json, text/plain, */*' },
        body,
      });
      const isJson = res.headers.get('content-type')?.includes('application/json');
      const data = isJson ? await res.json().catch(() => ({})) : {};
      if (res.ok) {
        setStatus('success'); setMessage((data as any)?.message || "You're on the list! Welcome aboard.");
        setName(''); setEmail('');
      } else {
        const txt = (data as any)?.message || (await res.text().catch(() => ''));
        setStatus('error'); setMessage(txt || 'Subscription failed. Please try again.');
      }
    } catch {
      setStatus('error'); setMessage('Network error — please try again.');
    }
  };

  // ------- Success view -------
  const SuccessView = (
    <div className="flex flex-col items-center text-center p-8 sm:p-10">
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-emerald-50 grid place-items-center ring-1 ring-emerald-100">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        </div>
        <Sparkles className="h-5 w-5 text-yellow-400 absolute -top-1 -right-1" />
      </div>
      <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-[#1F2A44]">Subscribed!</h2>
      <p className="mt-2 max-w-md text-gray-600">
        Thanks for joining Ogopogo Solar’s newsletter. We’ll send the best bits from project milestones, events and
        behind-the-scenes straight to your inbox.
      </p>
      <button
        onClick={handleClose}
        className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-[#ffc82e] text-white shadow hover:shadow-md transition"
      >
        Close
      </button>
    </div>
  );

  // ------- Modal body -------
  const modal = (
    <div
      className={[
        'fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-5',
        'transition-opacity duration-[180ms] ease-linear',
        isOpen ? 'opacity-100' : 'opacity-0',
        // allow vertical scroll, kill horizontal scroll on mobile
        'overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y',
        // glass overlay
        'bg-black/40 backdrop-blur-[3px] supports-[backdrop-filter:blur(2px)]:backdrop-saturate-150',
        'pb-[env(safe-area-inset-bottom)]',
      ].join(' ')}
      onClick={(e) => e.currentTarget === e.target && handleClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-modal-title"
    >
      <div
        className={[
          'relative w-full rounded-3xl',
          'ring-1 ring-black/10 shadow-[0_24px_80px_rgba(0,0,0,0.25)]',
          'transition-opacity duration-[180ms] ease-linear',
          isOpen ? 'opacity-100' : 'opacity-0',
          // scrollable on mobile, fixed-height on desktop; prevent x-overflow
          'max-h-[100svh] overflow-y-auto overflow-x-hidden md:max-h-[86vh] md:overflow-y-hidden',
          'box-border',
        ].join(' ')}
        // cap width so padding doesn't cause horizontal overflow
        style={{ width: safeWidth, maxWidth: 'calc(100svw - 24px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Two-panel layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white w-full">
          {/* LEFT: Brand panel */}
          <div
            className="relative p-8 sm:p-10 md:p-12 text-white overflow-hidden"
            style={{ background: 'radial-gradient(120% 120% at 0% 0%, #02784a 0%, #015e37 40%, #004126 100%)' }}
          >
            {/* MOBILE CLOSE (green/yellow) */}
            <button
              onClick={handleClose}
              className="md:hidden absolute top-3 right-3 p-2 rounded-full bg-[#004126] ring-1 ring-[#ffc82e]/50 shadow hover:bg-[#015e37] active:scale-95 transition"
              aria-label="Close"
              title="Close"
            >
              <X className="h-5 w-5 text-[#ffc82e]" />
            </button>

            {/* decorative blobs clipped by overflow-hidden */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-3rem] left-[-3rem] h-64 w-64 rounded-full bg-yellow-300/10 blur-2xl" />

            <div className="inline-flex items-center gap-2 bg-white/10 ring-1 ring-white/20 rounded-full px-3 py-1 text-sm">
              <BellRing className="h-4 w-4 text-[#ffc82e]" />
              <span>Monthly-ish updates</span>
            </div>

            <h1 id="newsletter-modal-title" className="mt-5 text-3xl sm:text-4xl font-extrabold leading-tight text-white">
              JOIN THE <span className="text-[#ffc82e]">OGOPOGO SOLAR NEWSLETTER</span>
            </h1>
            <p className="mt-3 text-white/85 max-w-md">
              Get progress drops, recruiting calls, and event invites. No spam, just sunshine ☀️
            </p>

            <ul className="mt-6 space-y-3 text-white/90">
              {[
                'Project milestones & race prep',
                'Recruitment & volunteer opportunities',
                'Sponsor highlights and community events',
              ].map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#ffc82e] mt-0.5 flex-shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs text-white/70">
              You can unsubscribe any time via the link in our emails.
            </p>
          </div>

          {/* RIGHT: Form panel / success view */}
          <div className="min-h-0 overflow-y-auto overflow-x-hidden bg-white px-6 sm:px-8 md:px-10 py-8">
            {status === 'success' ? (
              SuccessView
            ) : (
              <>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  <span>Be first to hear what we’re building.</span>
                </div>

                <form onSubmit={onSubmit} className="mt-5 grid gap-3 sm:gap-4">
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label className="text-sm">
                      Do not fill this field
                      <input
                        type="text"
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="nlm-name" className="block text-sm font-medium text-gray-800">Name</label>
                    <div className="relative mt-1">
                      <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="nlm-name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#015e37] focus:border-[#015e37] text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="nlm-email" className="block text-sm font-medium text-gray-800">Email</label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="nlm-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#015e37] focus:border-[#015e37] text-gray-900 placeholder-gray-400"
                        aria-invalid={status === 'error' ? true : undefined}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-1 inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-[#ffc82e] text-white hover:shadow-lg hover:scale-[1.01] transition disabled:opacity-75"
                  >
                    {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
                  </button>

                  {/* Feedback */}
                  <p className={`min-h-[1.25rem] text-sm ${status === 'error' ? 'text-red-600' : 'text-gray-600'}`} aria-live="polite">
                    {message}
                  </p>

                  <p className="text-xs text-gray-500">
                    By subscribing, you agree to receive updates from Ogopogo Solar. You can unsubscribe at any time.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* DESKTOP close (unchanged) */}
        <button
          onClick={handleClose}
          className="hidden md:flex absolute top-4 right-4 p-2 rounded-full bg-white/80 ring-1 ring-black/10 hover:bg-white"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        {/* Right-edge drag handle (desktop only) */}
        <button
          aria-label="Resize window"
          title="Drag to resize"
          onMouseDown={startDrag}
          className="hidden md:block absolute top-0 right-0 h-full w-3 active:bg-black/5 md:hover:bg-black/5 transition-colors"
          style={{ touchAction: 'none' }}
        />
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default NewsletterModal;
