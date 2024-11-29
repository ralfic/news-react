import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonType } from '../interfaces';

interface Props {
  type?: SkeletonType;
  count?: number;
}

export function SkeletonNews({ count = 1, type = 'sm' }: Props) {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <li className="w-full list-none" key={index}>
          <Skeleton height={type === 'lg' ? 240 : 64} />
        </li>
      ))}
    </>
  );
}
