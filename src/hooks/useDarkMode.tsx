import { createContext, useContext, useEffect, useState } from 'react';

// Definiramo tip za naš kontekst
type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

// Stvaramo kontekst s početnim vrijednostima
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Provider komponenta koja će omotati našu aplikaciju
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Koristimo useState za praćenje dark mode stanja
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Provjeravamo postoji li spremljena preferencija u localStorage
    const savedTheme = localStorage.getItem('theme');
    // Također provjeravamo sistemske preferencije korisnika
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme ? savedTheme === 'dark' : prefersDark;
  });

  // Funkcija za promjenu teme
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // Efekt koji se pokreće kada se promijeni isDarkMode
  useEffect(() => {
    // Spremamo preferenciju u localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    // Dodajemo ili uklanjamo 'dark' klasu s html elementa
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook za korištenje teme u komponentama
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme mora biti korišten unutar ThemeProvider-a');
  }
  return context;
}