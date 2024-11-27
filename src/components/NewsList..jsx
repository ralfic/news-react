import { NewsItem } from '../uikit/NewsItem';
import { SkeletonNews } from './Skeleton';

export function NewsList({ isLoading, newsList, pageSize }) {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {newsList.length > 0 && !isLoading ? (
        newsList.map((el) => <NewsItem key={el.id} item={el} />)
      ) : (
        <SkeletonNews count={pageSize} type="sm" />
      )}
    </ul>
  );
}
