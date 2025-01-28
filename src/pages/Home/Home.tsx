import { mockDecks } from '../../data/mockDecks';

const Home = () => {
  return (
    <div className="p-4">
      {/* Naslov i tražilica */}
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div className="mb-6">
        <input 
          type="text"
          placeholder="Search decks..."
          className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        />
      </div>

      {/* Sekcija s nedavnim špilovima */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Decks</h2>
        <div className="space-y-4">
          {mockDecks.map(deck => (
            <div 
              key={deck.id} 
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              {/* Zaglavlje špila s nazivom i menu ikonom */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{deck.name}</h3>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                  ⋮
                </button>
              </div>
              
              {/* Informacije o špilu */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {deck.cards.length} cards
              </div>
              
              {/* Traka napretka */}
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>In Progress</span>
                  <span>{deck.progress}% Complete</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${deck.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;