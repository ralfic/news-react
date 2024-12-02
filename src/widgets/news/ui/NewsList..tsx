import { Inews } from '@/entities/news';
import { NewsCard } from '@/entities/news/ui/NewsCard';
import { withSkeleton } from '@/shared/hocs/withSkeleton';
import clsx from 'clsx';

interface Props {
  news?: Inews[];
  type?: 'banner' | 'item';
  direction?: 'row' | 'column';
}

function NewsList({ news, type = 'item' }: Props) {
  return (
    <ul
      className={clsx(
        type === 'banner'
          ? 'grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3 max-h-[1200px] overflow-y-auto scrollbar-thin max-md:overflow-y-hidden'
          : 'grid grid-cols-1 gap-4'
      )}
    >
      {news?.map((item) => (
        <NewsCard key={item.id} item={item} type={type} />
      ))}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);
export default NewsListWithSkeleton;
