
import React, { useState } from 'react';

//==================================================================
// Confetti Component
//==================================================================
const Confetti: React.FC = () => {
  const confettiCount = 100;
  const colors = ['#fde68a', '#fecaca', '#a7f3d0', '#bfdbfe', '#ddd6fe'];

  const confetti = Array.from({ length: confettiCount }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}%`,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
      opacity: Math.random(),
      transform: `rotate(${Math.random() * 360}deg)`,
    };
    return (
      <div
        key={i}
        className="absolute top-[-20px] w-2 h-4 animate-fall"
        style={style}
      ></div>
    );
  });
  
  const keyframes = `
    @keyframes fall {
      0% {
        transform: translateY(0vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(110vh) rotate(720deg);
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-50 pointer-events-none">
        {confetti}
      </div>
    </>
  );
};


//==================================================================
// Letter Component
//==================================================================
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


//==================================================================
// Envelope Component
//==================================================================
interface EnvelopeProps {
  isOpen: boolean;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen }) => {
  return (
    <div className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${isOpen ? 'translate-y-full opacity-0 delay-750' : 'translate-y-0 opacity-100'}`}>
      {/* Envelope Back */}
      <div className="absolute w-full h-full bg-rose-300 rounded-lg shadow-xl"></div>
      
      {/* Envelope Front */}
      <div className="absolute w-full h-full bg-rose-200 rounded-lg flex items-center justify-center z-20">
        <div className="text-center p-4">
          <h1 className="text-xl sm:text-2xl font-bold text-rose-800 tracking-wider">
            給進電三甲畢業生
          </h1>
        </div>
      </div>

      {/* Envelope Flap */}
      <div
        className="absolute top-0 left-0 w-full h-1/2"
        style={{ perspective: '1000px' }}
      >
        <div
          className={`absolute w-full h-full transform-origin-top transition-transform duration-700 ease-in-out z-30 ${isOpen ? 'rotate-x-180' : 'rotate-x-0'}`}
          style={{
            transformStyle: 'preserve-3d',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            WebkitClipPath: 'polygon(0 0, 100% 0, 50% 100%)'
          }}
        >
          {/* Front of the flap */}
          <div className="absolute w-full h-full bg-rose-300" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
          </div>

          {/* Back of the flap (visible when open) */}
          <div className="absolute w-full h-full bg-rose-200" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}></div>
        </div>
      </div>
    </div>
  );
};


//==================================================================
// Main App Component
//==================================================================
const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-rose-100 to-teal-100 overflow-hidden">
      {isOpen && <Confetti />}
      <div 
        className={`relative w-[320px] h-[200px] sm:w-[400px] sm:h-[250px] lg:w-[480px] lg:h-[300px] flex items-center justify-center ${isOpen ? '' : 'cursor-pointer'}`}
        onClick={handleOpen}
        title={isOpen ? "" : "Click to open"}
      >
        <Letter isOpen={isOpen} />
        <Envelope isOpen={isOpen} />
      </div>
      {!isOpen && (
         <div className="absolute bottom-10 text-gray-500 animate-pulse">
           Click the envelope to open
         </div>
      )}
    </main>
  );
};

export default App;
