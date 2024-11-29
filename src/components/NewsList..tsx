import { withSkeleton } from '../helpers/hocs/withSkeleton';
import { Inews } from '../interfaces';
import { NewsItem } from './NewsItem';

interface Props {
  newsList?: Inews[];
}

function NewsList({ newsList }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {newsList?.map((el) => (
        <NewsItem key={el.id} item={el} />
      ))}
    </ul>
  );
}

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'sm', 10);
