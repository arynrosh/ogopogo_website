// src/components/BlogReaderModal.tsx
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Tag, User, X } from 'lucide-react';
import type { BlogPost, ContentBlock } from '../data/blogs';

type Props = {
  post: BlogPost;
  onClose: () => void;
  getCategoryColor: (category: BlogPost['category'] | string) => string;
  formatDate: (iso: string) => string;
};

const Block: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-10 mb-5 font-extrabold text-2xl text-[#1F2A44]">{block.text}</h2>;
    case 'h3':
      return <h3 className="mt-8 mb-4 font-bold text-xl text-[#1F2A44]">{block.text}</h3>;
    case 'p':
      return <p className="my-6 leading-[1.9] text-[#2b3650]">{block.text}</p>;
    case 'ul':
      return (
        <ul className="my-6 list-disc pl-6 space-y-2 text-[#2b3650]">
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      );
    case 'hr':
      return <hr className="my-10 border-t border-black/10" />;
    case 'img':
      return (
        <div className="my-6">
          <img
            src={block.src}
            alt={block.alt ?? ''}
            className="rounded-xl shadow w-full object-cover max-h-[480px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      );
    case 'quote':
      return (
        <blockquote className="my-8 pl-5 border-l-4 border-[#015e37] text-[#1F2A44] italic">
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
};

const FADE_MS = 180; // subtle & quick

const BlogReaderModal: React.FC<Props> = ({ post, onClose, getCategoryColor, formatDate }) => {
  // ----- Fade state (enter/exit) -----
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimer = useRef<number | null>(null);

  // ----- Resizable width state (desktop) -----
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [widthPx, setWidthPx] = useState<number>(() => {
    if (typeof window === 'undefined') return 920;
    const vw = Math.min(window.innerWidth, 1600);
    return Math.max(680, Math.round(vw * 0.8)); // ~80vw, min 680
  });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const max = Math.min(vw - 24, 1400);
      const min = 560;
      // Anchor to the center so resizing feels natural even if the modal is centered
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
      document.documentElement.style.cursor = 'none';
    }
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
  }, [dragging, widthPx]);

  // ESC to close + lock body scroll + trigger fade-in
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && handleClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // start enter fade on next frame
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

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setIsOpen(false); // triggers fade-out
    closeTimer.current = window.setTimeout(() => {
      onClose();
    }, FADE_MS);
  };

  const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const safeWidth = Math.min(widthPx, vw - 24);

  const modal = (
    <div
      ref={overlayRef}
      className={[
        "modal-surface cursor-none fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-5",
        "transition-opacity duration-[180ms] ease-linear",
        isOpen ? "opacity-100" : "opacity-0",
      ].join(' ')}
      style={{
        background:
          'radial-gradient(1200px 50% at 50% 50%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.45) 100%)',
        willChange: 'opacity',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="post-reader-title"
    >
      <div
        ref={cardRef}
        className={[
          'relative',
          'w-full max-h-[85vh]',
          'bg-white rounded-2xl overflow-hidden flex flex-col',
          'ring-1 ring-[#015e37]/10 shadow-[0_24px_80px_rgba(1,94,55,0.20)]',
          'supports-[backdrop-filter:blur(1px)]:bg-white/80 supports-[backdrop-filter:blur(1px)]:backdrop-blur-md supports-[backdrop-filter:blur(1px)]:backdrop-saturate-125',
          // Subtle card fade (matches overlay)
          'transition-opacity duration-[180ms] ease-linear',
          isOpen ? 'opacity-100' : 'opacity-0',
          'cursor-none',
        ].join(' ')}
        style={{
          width: safeWidth,
          maxWidth: '90vw',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#015e37]/10">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full fluid-small ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
            <span className="text-gray-500 fluid-small">
              {formatDate(post.date)} • {post.readTime}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#015e37]/40"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scroller */}
        <div className="min-h-0 grow overflow-y-auto" style={{ contain: 'content' }}>
          {/* Banner */}
          <div className="w-full aspect-[21/9] relative">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Article */}
          <div className="px-5 sm:px-8 py-6 bg-white supports-[backdrop-filter:blur(1px)]:bg-white/80">
            <div
              className="max-w-3xl mx-auto"
              style={{ contentVisibility: 'auto', containIntrinsicSize: '800px 1200px' }}
            >
              <h1 id="post-reader-title" className="font-extrabold text-dark-900 mb-2 fluid-h1">
                {post.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-600 mb-6 fluid-small">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>

              {post.contentBlocks && post.contentBlocks.length > 0 ? (
                post.contentBlocks.map((b, i) => <Block key={i} block={b} />)
              ) : (
                <p className="my-6 leading-[1.9] text-[#2b3650]">{post.excerpt}</p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-5 border-t border-black/5">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded fluid-small"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right-edge drag handle */}
        <button
          aria-label="Resize reader"
          title="Drag to resize"
          onMouseDown={startDrag}
          className={[
            'absolute top-0 right-0 h-full w-2 md:w-3',
            'cursor-none',
            'active:bg-black/5 md:hover:bg-black/5 transition-colors',
          ].join(' ')}
          style={{ touchAction: 'none' }}
        />
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default BlogReaderModal;
