import clsx from 'clsx';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function SkeletonNews({ count = 1, type = 'sm' }) {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <li className={clsx("flex w-full", type === "lg" && "flex-col")} key={index}>
          <Skeleton width={type === "lg" ? "" : 64} height={type === "lg" && 270} className="w-16 h-16 mr-4" />
          <div className="flex flex-1 flex-col justify-between">
            <h3 className="flex-1">
              <Skeleton height={40} />
            </h3>
            <p className="flex-1">
              <Skeleton />
            </p>
          </div>
        </li>
      ))}
    </>
  );
}
