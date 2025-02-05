import { useState } from 'react';

// Definiramo tipove za našu karticu
type FlashCardProps = {
  front: string;
  back: string;
  deckName: string;
};

const FlashCard = ({ front, back, deckName }: FlashCardProps) => {
  console.log('kdfuhgkjf');
  // State za praćenje je li kartica okrenuta
  const [isFlipped, setIsFlipped] = useState(false);

  // Funkcija za okretanje kartice
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative w-full h-64 cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      {/* Kontejner za okretanje koji održava 3D prostor */}
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Prednja strana kartice */}
        <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg backface-hidden">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {deckName}
          </div>
          <div className="text-xl text-center mt-8">
            {front}
          </div>
        </div>
        
        {/* Stražnja strana kartice */}
        <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg backface-hidden rotate-y-180">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {deckName}
          </div>
          <div className="text-xl text-center mt-8">
            {back}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;