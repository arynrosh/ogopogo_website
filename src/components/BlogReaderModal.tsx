// src/components/BlogReaderModal.tsx
import React, { useEffect } from 'react';
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

const BlogReaderModal: React.FC<Props> = ({ post, onClose, getCategoryColor, formatDate }) => {
  // ESC to close + lock body scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const modal = (
    <div
      className="modal-surface cursor-none fixed inset-0 z-[1000] bg-black/30 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="post-reader-title"
    >
      <div className="w-full max-w-6xl bg-white/95 supports-[backdrop-filter]:bg-white/85 rounded-2xl overflow-hidden flex flex-col max-h-[82vh] ring-1 ring-[#015e37]/10 shadow-[0_24px_80px_rgba(1,94,55,0.20)]">
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
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#015e37]/40"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scroller */}
        <div className="min-h-0 grow overflow-y-auto">
          {/* Banner */}
          <div className="w-full aspect-[21/9] relative">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        {/* Article */}
          <div className="px-5 sm:px-8 py-6 bg-gradient-to-b from-white/95 to-white/90">
            <div className="max-w-3xl mx-auto">
              <h1 id="post-reader-title" className="font-extrabold text-dark-900 mb-2 fluid-h1">
                {post.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-600 mb-6 fluid-small">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>

              {/* Content blocks or fallback */}
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
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default BlogReaderModal;
