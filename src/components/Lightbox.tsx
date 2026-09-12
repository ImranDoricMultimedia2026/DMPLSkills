import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950 text-white">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#9d3626] text-white">
              {item.category}
            </span>
            <h4 className="text-sm font-semibold text-slate-200 truncate">
              {item.title}
            </h4>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Image display */}
        <div className="relative w-full max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[70vh] w-auto object-contain mx-auto"
          />
        </div>

        {/* Footer details */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 text-slate-300">
          <p className="text-sm text-slate-200 leading-relaxed mb-3">
            {item.caption}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#9d3626]" />
              {item.locationPlaceholder}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#9d3626]" />
              {item.datePlaceholder}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-slate-500" />
              Placeholder Archive Asset
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
