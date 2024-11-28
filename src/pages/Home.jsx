import { LatestNews } from '../components/LatestNews';
import { NewsByFilters } from '../components/NewsByFilters';

export function Home() {
  return (
    <main className="w-full grid grid-cols-2 gap-6 max-md:grid-cols-1">
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}
