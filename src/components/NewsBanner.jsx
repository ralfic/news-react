import { formatTimeAgo } from '../helpers/formatTimeAgo';
import { Image } from './Image';

export function NewsBanner({ item }) {
  return (
    <li className="flex gap-3 flex-col">
      <Image image={item?.image} />
      <div className="flex flex-col flex-1 gap-2">
        <h3 className="font-semibold text-lg leading-6">{item?.title}</h3>
        <p className="text-xs leading-4">{`${formatTimeAgo(
          item?.published
        )} by ${item?.author}`}</p>
      </div>
    </li>
  );
}
