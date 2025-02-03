import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { mockDecks } from '../../data/mockDecks';

const Create = () => {
  const [selectedDeck, setSelectedDeck] = useState('');
  const [frontContent, setFrontContent] = useState('');
  const [backContent, setBackContent] = useState('');

  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Zaglavlje */}
      <h1 className="text-2xl font-bold mb-6">Create New Card</h1>

      <form className="space-y-6">
        {/* Odabir špila */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Deck
          </label>
          <div className="relative">
            <select
              value={selectedDeck}
              onChange={(e) => setSelectedDeck(e.target.value)}
              className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg appearance-none cursor-pointer pr-10"
            >
              <option value="">Select a deck</option>
              {mockDecks.map(deck => (
                <option key={deck.id} value={deck.id}>
                  {deck.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
          </div>
        </div>

        {/* Prednja strana kartice */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Front
          </label>
          <textarea
            value={frontContent}
            onChange={(e) => setFrontContent(e.target.value)}
            placeholder="Enter question or term"
            className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg min-h-[100px] resize-none"
          />
        </div>

        {/* Stražnja strana kartice */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Back
          </label>
          <textarea
            value={backContent}
            onChange={(e) => setBackContent(e.target.value)}
            placeholder="Enter answer or definition"
            className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg min-h-[100px] resize-none"
          />
        </div>

        {/* Gumb za kreiranje */}
        <button
          type="button"
          className="w-full p-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Create Card
        </button>
      </form>
    </div>
  );
};

export default Create;