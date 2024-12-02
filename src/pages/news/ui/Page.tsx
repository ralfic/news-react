import { useAppSelector } from '@/app/appStore';
import { NewsDetails } from '@/entities/news';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router';

export function NewsPage() {
  const currentnews = useAppSelector((state) => state.news.currentNews);

  if (!currentnews)
    return (
      <div>
        <h1>Cannot find news</h1>
        <a className="flex items-center gap-1 font-medium">
          <Link to={'/'}>Go to home page</Link>{' '}
          <ArrowRightIcon width={18} height={18} />
        </a>
      </div>
    );

  return (
    <main className="w-full flex flex-col">
      <NewsDetails news={currentnews} />
    </main>
  );
}
