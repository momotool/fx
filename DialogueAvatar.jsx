import React from 'react';

/**
 * 初心者アイコン（会話用・左側・初心者っぽい顔）
 */
export function BeginnerIcon({ className = '' }) {
  return (
    <div className={`flex flex-shrink-0 flex-col items-center ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="24" cy="26" r="16" fill="#E8EEF4" stroke="#9CA3AF" strokeWidth="1.2" />
        <ellipse cx="20" cy="25" rx="2.5" ry="3" fill="#5a6578" />
        <ellipse cx="28" cy="25" rx="2.5" ry="3" fill="#5a6578" />
        <path d="M 18 34 Q 24 38 30 34" stroke="#6B7280" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* ほっぺ（初心者らしい） */}
        <ellipse cx="18" cy="30" rx="3" ry="1.5" fill="#FECDD3" opacity="0.7" />
        <ellipse cx="30" cy="30" rx="3" ry="1.5" fill="#FECDD3" opacity="0.7" />
      </svg>
      <span className="mt-0.5 text-xs font-bold text-gray-600">初心者</span>
    </div>
  );
}

/**
 * 先生アイコン（会話用・右側・頬なし・ちょっと真面目そうで優しそうな顔）
 */
export function TeacherIcon({ className = '' }) {
  return (
    <div className={`flex flex-shrink-0 flex-col items-center ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="24" cy="26" r="16" fill="#FDF6E8" stroke="#D4A574" strokeWidth="1" />
        <ellipse cx="20" cy="25" rx="2" ry="2" fill="#4a5568" />
        <ellipse cx="28" cy="25" rx="2" ry="2" fill="#4a5568" />
        <path d="M 20 33 Q 24 35.5 28 33" stroke="#8B7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
      <span className="mt-0.5 text-xs font-bold text-gray-600">先生</span>
    </div>
  );
}
