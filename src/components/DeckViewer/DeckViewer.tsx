import { useState } from 'react';
import FlashCard from '../FlashCard/FlashCard';
import { Deck } from '../../data/mockDecks';

type DeckViewerProps = {
  deck: Deck;
};

const DeckViewer = ({ deck }: DeckViewerProps) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = deck.cards[currentCardIndex];

  // Funkcija za prelazak na sljedeću karticu
  const nextCard = () => {
    setCurrentCardIndex((prev) => 
      prev < deck.cards.length - 1 ? prev + 1 : prev
    );
  };

  // Funkcija za povratak na prethodnu karticu
  const previousCard = () => {
    setCurrentCardIndex((prev) => prev > 0 ? prev - 1 : prev);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{deck.name}</h2>
      <div className="mb-4">
        <FlashCard
          front={currentCard.front}
          back={currentCard.back}
          deckName={deck.name}
        />
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={previousCard}
          disabled={currentCardIndex === 0}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50"
        >
          Prethodna
        </button>
        <div className="text-center">
          {currentCardIndex + 1} od {deck.cards.length}
        </div>
        <button
          onClick={nextCard}
          disabled={currentCardIndex === deck.cards.length - 1}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50"
        >
          Sljedeća
        </button>
      </div>
    </div>
  );
};

export default DeckViewer;