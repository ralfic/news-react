import { clsx } from 'clsx';
import { DirectioneType, SkeletonType } from '../interfaces';
import { SkeletonNews } from '../ui/Skeleton';

interface Props {
  isLoading: boolean;
  direction?: DirectioneType;
  type?: SkeletonType;
}

export function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  count?: number
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, type, direction = 'column', ...restProps } = props;
    if (isLoading) {
      return (
        <ul
          className={clsx(
            direction === 'row' &&
              'grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-3'
          )}
        >
          <SkeletonNews type={type} count={count} />;
        </ul>
      );
    }
    return <Component type={type} {...(restProps as P)} />;
  };
}
