import { useState } from 'react';
import { ArrowLeft, Bookmark, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Study = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const currentDeck = {
    totalCards: 10,
    currentCard: {
      front: "What is photosynthesis?",
      back: "The process by which plants convert sunlight into chemical energy"
    }
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="h-[calc(100vh-80px)] p-4 flex flex-col">
      {/* Naslov */}
      <h1 className="text-2xl font-bold mb-6">Study</h1>
      {/* Header - smanjili smo margin-bottom */}
      <div className="flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 dark:text-gray-300"
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>Back</span>
        </button>
        
        <div className="flex gap-4">
          <button className="p-1">
            <Bookmark size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-1">
            <Share2 size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Card Counter */}
      <div className="text-center mb-2 text-gray-600 dark:text-gray-300">
        Card {currentCardIndex + 1} of {currentDeck.totalCards}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4">
        <div 
          className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentCardIndex + 1) / currentDeck.totalCards) * 100}%` }}
        />
      </div>

      {/* Flashcard */}
      <div 
        onClick={handleCardClick}
        className="flex-1 flex items-center justify-center mb-4"
      >
        <div className="relative w-full max-w-lg aspect-[5/3] cursor-pointer preserve-3d transition-transform duration-300"
             style={{ transform: isFlipped ? 'rotateY(180deg)' : '' }}>
          {/* Prednja strana */}
          <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 backface-hidden">
            <div className="w-full h-full flex items-center justify-center text-lg">
              {currentDeck.currentCard.front}
            </div>
          </div>
          
          {/* Stražnja strana */}
          <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 backface-hidden"
               style={{ transform: 'rotateY(180deg)' }}>
            <div className="w-full h-full flex items-center justify-center text-lg">
              {currentDeck.currentCard.back}
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center gap-3 mb-2">
        <button className="px-5 py-1.5 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100">
          Again
        </button>
        <button className="px-5 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100">
          Good
        </button>
        <button className="px-5 py-1.5 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100">
          Easy
        </button>
      </div>
    </div>
  );
};

export default Study;