import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import { Inews } from '..';
import { Image } from '@/shared/ui/Image';
import clsx from 'clsx';

interface Props {
  item: Inews;
  type: 'banner' | 'item';
}

export function NewsCard({ item, type }: Props) {
  return (
    <li className={clsx('flex gap-3', type === 'banner' && 'flex-col')}>
      <Image image={item.image} size={type} />
      <div className="flex flex-col flex-1 gap-1">
        <h3
          className={clsx(
            'font-semibold',
            type === 'banner' ? 'text-lg leading-6' : 'text-sm leading-5 '
          )}
        >
          {item.title}
        </h3>
        <p className={'text-xs leading-4 dark:text-gray-300'}>{`${formatTimeAgo(
          item.published
        )} by ${item.author}`}</p>
      </div>
    </li>
  );
}
