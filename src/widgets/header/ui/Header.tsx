import { ThemeButton } from '@/features/theme/ui/ThemeButton';
import { formatDate } from '@/shared/helpers/formatDate';

export function Header() {
  return (
    <header className="flex justify-between px-6 py-3 border-b-[1px] items-center">
      <div>
        <h1 className="font-semibold text-4xl">News App</h1>
        <p>{formatDate(new Date())}</p>
      </div>
      <div className="flex items-center justify-center">
        <ThemeButton />
      </div>
    </header>
  );
}
