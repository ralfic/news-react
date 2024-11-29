import { Header } from './components/Header';
import { Home } from './pages/Home';
import clsx from 'clsx';
import { useTheme } from './context/ThemeContext';

export function App() {
  const { isDark } = useTheme();
  return (
    <div
      className={clsx('dark:bg-[#212830] dark:text-white', isDark && 'dark')}
    >
      <Header />
      <div className="p-6">
        <Home />
      </div>
    </div>
  );
}
