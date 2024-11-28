import { withSkeleton } from '../helpers/hocs/withSkeleton';
import { NewsItem } from './NewsItem';

function NewsList({ isLoading, newsList }) {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {newsList?.map((el) => (
        <NewsItem key={el.id} item={el} />
      ))}
    </ul>
  );
}

export const NewsListWithSkeleton = withSkeleton(NewsList, 'sm', 10);
