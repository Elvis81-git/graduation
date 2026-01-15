
import React from 'react';

interface LetterProps {
  isOpen: boolean;
}

const Letter: React.FC<LetterProps> = ({ isOpen }) => {
  return (
    <div
      className={`absolute w-[95%] h-auto bg-white top-1 left-1/2 -translate-x-1/2 rounded-md shadow-2xl p-6 sm:p-8 transition-all duration-1000 ease-out z-10 -translate-y-[3%] sm:-translate-y-[17%] ${
        isOpen ? 'opacity-100 scale-105 delay-300' : 'opacity-0 scale-95 pointer-events-none'
      }`}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="text-gray-800 text-sm sm:text-base leading-relaxed tracking-wide">
        <p className="font-bold mb-4">To 進電三甲的大家：</p>
        <p className="mb-3">
          首先，恭喜大家都順利畢業了！進修的道路不容易，你們在工作、家庭與課業之間努力堅持，展現了難得的毅力與責任感。
        </p>
        <p className="mb-3">
          你們是我第一個教職生涯帶的班級，真的很開心也很有緣份遇到大家，一開始接導師也有點慌亂和不安，謝謝你們總是很配合也很自律，是一個天使班級。
        </p>
        <p className="mb-3">
          很抱歉不能完整的陪伴你們高中三年，到現在還是很想念大家。
        </p>
        <p>
          最後祝福大家，無論未來走到哪裡，都能保持初心，持續學習，開創屬於自己的精彩人生。
        </p>
      </div>
    </div>
  );
};

export default Letter;