import { SkeletonNews } from '../../components/Skeleton';

export function withSkeleton(Component, type, count) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <SkeletonNews type={type} count={count} />;
    }
    return <Component {...restProps} />;
  };
}
