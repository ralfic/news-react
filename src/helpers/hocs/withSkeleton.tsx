import { clsx } from 'clsx';
import { SkeletonNews } from '../../components/Skeleton';
import { SkeletonType } from '../../interfaces';

interface Props {
  isLoading: boolean;
}

export function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction = 'column'
) {
  return function WithSkeleton(props: Props & P) {
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
    return <Component {...(restProps as P)} />;
  };
}
