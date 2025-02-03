import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Study from './pages/Study/Study';
import Settings from './pages/Settings/Settings';
import { ThemeProvider } from './hooks/useDarkMode';

function App() {
  return (
    <ThemeProvider>
    <Routes>
      <Route element={<Layout />}>
        {/* Definiramo rutu za početnu stranicu */}
        <Route index element={<Home />} />
        {/* Definiramo ostale rute */}
        <Route path="/create" element={<Create />} />
        <Route path="/study" element={<Study />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
    </ThemeProvider>
  );
}

export default App;