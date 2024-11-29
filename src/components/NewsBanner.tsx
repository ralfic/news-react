import { formatTimeAgo } from '../helpers/formatTimeAgo';
import { Inews } from '../interfaces';
import { Image } from './Image';

interface Props {
  item: Inews;
}

export function NewsBanner({ item }: Props) {
  return (
    <li className="flex gap-3 flex-col">
      <Image image={item.image} />
      <div className="flex flex-col flex-1 gap-2">
        <h3 className="font-semibold text-lg leading-6">{item.title}</h3>
        <p className="text-xs leading-4 dark:text-gray-300">{`${formatTimeAgo(
          item.published
        )} by ${item?.author}`}</p>
      </div>
    </li>
  );
}
