import { Header } from '@/widgets/header/ui/Header';
import { useTheme } from '@/app/providers/ThemeProvider';
import clsx from 'clsx';
import { Outlet } from 'react-router';

export function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div
      className={clsx('dark:bg-[#212830] dark:text-white', isDark && 'dark')}
    >
      <Header />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
