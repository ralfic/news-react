import { useTheme } from '@/app/providers/ThemeProvider';
import { SunMoon } from 'lucide-react';

export function ThemeButton() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      <SunMoon width={36} height={36} color={isDark ? '#fff' : '#000'} />
    </button>
  );
}
