import { SunMoon } from 'lucide-react';
import { formatDate } from '../helpers/formatDate';
import { useTheme } from '../context/ThemeContext';


export function Header() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className="flex justify-between px-6 py-3 border-b-[1px] items-center">
      <div>
        <h1 className="font-semibold text-4xl">News App</h1>
        <p>{formatDate(new Date())}</p>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={toggleTheme}>
          <SunMoon width={36} height={36} color={isDark ? '#fff' : '#000'} />
        </button>
      </div>
    </header>
  );
}
