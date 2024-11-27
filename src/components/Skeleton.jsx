import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function SkeletonNews({ count = 1, type = 'sm' }) {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <li
          className={clsx('flex w-full ', type === 'lg' && 'flex-col')}
          key={index}
        >
          <div className="flex-1">
            <Skeleton height={type === 'lg' ? 300 : 64} />
          </div>
        </li>
      ))}
    </>
  );
}
