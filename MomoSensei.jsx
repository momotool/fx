import React from 'react';

/**
 * 桃先生のイラスト＋吹き出し（わわわIT用語辞典風）
 */
export default function MomoSensei({ comment, className = '' }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* 吹き出し（上） */}
      <div className="relative mb-2 w-full">
        <div className="rounded-2xl rounded-br-md border-2 border-pastel-peach/80 bg-white/95 px-4 py-2.5 shadow-sm">
          <p className="text-sm leading-relaxed text-gray-700">{comment}</p>
        </div>
        <div className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 border-b-2 border-r-2 border-pastel-peach/80 bg-white"></div>
      </div>
      {/* 桃先生キャラ（簡易SVG） */}
      <div className="flex flex-col items-center">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
          aria-hidden
        >
          {/* 桃の形ベース */}
          <ellipse cx="32" cy="38" rx="22" ry="20" fill="#FFB7C5" stroke="#E8959E" strokeWidth="1.5" />
          {/* 顔 */}
          <circle cx="32" cy="32" r="18" fill="#FFE4EC" stroke="#E8959E" strokeWidth="1" />
          {/* 目 */}
          <ellipse cx="27" cy="30" rx="3" ry="4" fill="#5a6578" />
          <ellipse cx="37" cy="30" rx="3" ry="4" fill="#5a6578" />
          {/* ほっぺ */}
          <ellipse cx="24" cy="36" rx="4" ry="2" fill="#ffb7c5" opacity="0.6" />
          <ellipse cx="40" cy="36" rx="4" ry="2" fill="#ffb7c5" opacity="0.6" />
          {/* 口（にっこり） */}
          <path d="M 28 40 Q 32 44 36 40" stroke="#c85a6a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
        <span className="mt-1 text-xs font-bold text-gray-600">桃先生</span>
      </div>
    </div>
  );
}
