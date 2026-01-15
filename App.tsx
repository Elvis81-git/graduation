
import React, { useState } from 'react';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import Confetti from './components/Confetti';

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
