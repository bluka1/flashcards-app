import { Outlet, NavLink } from 'react-router-dom';
import { Home, PlusCircle, BookOpen, Settings } from 'lucide-react';
import { useTheme } from '../../hooks/useDarkMode';


// Definiramo tip za našu navigacijsku stavku kako bismo osigurali konzistentnost
type NavItem = {
  path: string;
  label: string;
  icon: React.ElementType;
};

// Izdvajamo navigacijske stavke u zasebnu konstantu radi bolje organizacije
const navItems: NavItem[] = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/create', label: 'Create', icon: PlusCircle },
  { path: '/study', label: 'Study', icon: BookOpen },
  { path: '/settings', label: 'Settings', icon: Settings },
];

const Layout = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const getLinkClasses = (isActive: boolean): string => {
    const baseClasses = "flex flex-col items-center transition-colors duration-200";

    // Klase za aktivno stanje
    const activeClasses = isDarkMode 
      ? "text-primary-400" // Svjetlija primarna boja u dark modu
      : "text-primary-600"; // Tamnija primarna boja u light modu

    // Klase za neaktivno stanje
    const inactiveClasses = isDarkMode
      ? "text-gray-400 hover:text-primary-300" // Svjetlije boje u dark modu
      : "text-gray-500 hover:text-primary-500"; // Tamnije boje u light modu

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Glavni sadržaj stranice */}
     
      <main className="flex-1 container mx-auto px-4 pb-20 text-gray-900 dark:text-white">
        <Outlet />
      </main>

      {/* Fiksna navigacija na dnu */}
      <nav className="card-base fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-200">
        <div className="container mx-auto px-card">
          <div className="flex justify-around py-3">
            {navItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => getLinkClasses(isActive)}
              >
                <Icon size={24} />
                <span className="text-xs mt-1">{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;