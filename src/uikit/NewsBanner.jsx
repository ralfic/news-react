import clsx from 'clsx';
import { formatTimeAgo } from '../helpers/formatTimeAgo';
import { Image } from './Image';

export function NewsBanner({ item, size = 'lg' }) {
  return (
    <li className={clsx('flex gap-3', size === 'lg' && 'flex-col')}>
      {size === 'lg' ? (
        <Image image={item.image} />
      ) : item.image !== 'None' ? (
        <img className="  " src={item.image} />
      ) : (
        <div className="bg-gray-200 h-16 w-16 ml-4 flex-initial"></div>
      )}

      <div
        className={clsx(
          'flex flex-col flex-1',
          size === 'sm' && 'gap-1',
          size === 'lg' && 'gap-2'
        )}
      >
        <h3
          className={clsx(
            'font-semibold ',
            size === 'sm' && 'text-sm leading-5',
            size === 'lg' && 'text-lg leading-6'
          )}
        >
          {item.title}
        </h3>
        <p className={clsx('text-xs leading-4')}>{`${formatTimeAgo(
          item.published
        )} by ${item.author}`}</p>
      </div>
    </li>
  );
}
