
import React from 'react';

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
  
  // Create a keyframes style element for the animation
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

export default Confetti;
