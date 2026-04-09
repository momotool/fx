import React from 'react';
import { BeginnerIcon, TeacherIcon } from './DialogueAvatar';

/**
 * 会話1行（初心者＝左・先生＝右）同じ形式で統一
 */
export function DialogueRow({ role, children }) {
  const isBeginner = role === 'beginner';
  return (
    <div className={`flex items-end gap-2 ${isBeginner ? '' : 'flex-row-reverse'}`}>
      {isBeginner ? <BeginnerIcon /> : <TeacherIcon />}
      <div
        className={`relative max-w-[85%] rounded-2xl border-2 px-4 py-3 shadow-sm ${
          isBeginner
            ? 'rounded-br-md border-pastel-pink/70 bg-gradient-to-br from-[#fff5f5] to-[#fef0f0]'
            : 'rounded-bl-md border-pastel-peach/70 bg-gradient-to-br from-[#f0f4fa] to-[#e8eef8]'
        }`}
      >
        <div className="text-sm leading-relaxed text-gray-700 md:text-base">{children}</div>
        <div
          className={`absolute bottom-3 h-2 w-2 rotate-45 border-b-2 ${
            isBeginner
              ? '-left-1.5 border-r-2 border-pastel-pink/60 bg-[#fef0f0]'
              : '-right-1.5 border-l-2 border-pastel-peach/60 bg-[#e8eef8]'
          }`}
        />
      </div>
    </div>
  );
}
