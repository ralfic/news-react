import { withSkeleton } from '../helpers/hocs/withSkeleton';
import { NewsItem } from './NewsItem';
import { SkeletonNews } from './Skeleton';

function NewsList({ isLoading, newsList, pageSize }) {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {newsList?.map((el) => (
        <NewsItem key={el.id} item={el} />
      ))}
    </ul>
  );
}

export const NewsListWithSkeleton = withSkeleton(NewsList, 'sm', 10);
