import { Inews } from '@/entities/news';
import { NewsCard } from '@/entities/news/ui/NewsCard';
import { withSkeleton } from '@/shared/hocs/withSkeleton';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  news?: Inews[];
  type?: 'banner' | 'item';
  direction?: 'row' | 'column';
  viewNewsSlot?: (news: Inews) => ReactNode;
}

function NewsList({ news, type = 'item', viewNewsSlot }: Props) {
  return (
    <ul
      className={clsx(
        type === 'banner'
          ? 'grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3 max-h-[1200px] overflow-y-auto scrollbar-thin max-md:overflow-y-hidden'
          : 'grid grid-cols-1 gap-4'
      )}
    >
      {news?.map((item) => (
        <NewsCard
          key={item.id}
          viewNewsSlot={viewNewsSlot}
          item={item}
          type={type}
        />
      ))}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);
export default NewsListWithSkeleton;
