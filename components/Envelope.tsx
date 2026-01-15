
import React from 'react';

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

export default Envelope;
