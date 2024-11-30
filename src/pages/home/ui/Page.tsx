import { LatestNews } from '@/pages/home/ui/LatestNews';
import { NewsByFilters } from '@/pages/home/ui/NewsByFilters';

export function HomePage() {
  return (
    <main className="w-full grid grid-cols-2 gap-6 max-md:grid-cols-1">
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}
