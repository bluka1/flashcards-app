export type Card = {
    id: string;
    front: string;
    back: string;
  };
  
export type Deck = {
    id: string;
    name: string;
    cards: Card[];
    progress: number;
  };
  
export const mockDecks: Deck[] = [
    {
      id: '1',
      name: 'Mathematics',
      progress: 75,
      cards: [
        {
          id: '1',
          front: 'Što je Pitagorin poučak?',
          back: 'a² + b² = c², gdje su a i b katete, a c hipotenuza pravokutnog trokuta'
        },
        {
          id: '2',
          front: 'Koliko je 2²?',
          back: '4 (2 na kvadrat je 2 × 2 = 4)'
        },
        // Možete dodati više kartica...
      ]
    },
    {
      id: '2',
      name: 'Science',
      progress: 60,
      cards: [
        {
          id: '1',
          front: 'Što je fotosinteza?',
          back: 'Proces kojim biljke pretvaraju sunčevu energiju u kemijsku energiju'
        },
        // Više kartica...
      ]
    }
  ];