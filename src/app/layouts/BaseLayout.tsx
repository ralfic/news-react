import { Header } from '@/widgets/header/ui/Header';
import { useTheme } from '@/app/providers/ThemeProvider';
import clsx from 'clsx';
import { HomePage } from '@/pages/home/ui/Page';


export function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div
      className={clsx('dark:bg-[#212830] dark:text-white', isDark && 'dark')}
    >
      <Header />
      <div className="p-6">
        <HomePage />
      </div>
    </div>
  );
}
