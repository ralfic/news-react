import { clsx } from 'clsx';
import { SkeletonNews } from '../../components/Skeleton';

export function withSkeleton(Component, type, count, direction = 'column') {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return (
        <ul
          className={clsx(
            direction === 'row' &&
              'grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3'
          )}
        >
          <SkeletonNews type={type} count={count} />;
        </ul>
      );
    }
    return <Component {...restProps} />;
  };
}
