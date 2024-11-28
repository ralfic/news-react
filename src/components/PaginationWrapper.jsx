import { Pagenation } from './Pagenation';

export function PaginationWrapper({
  top,
  bottom,
  children,
  ...paginationProps
}) {
  return (
    <>
      {top && <Pagenation {...paginationProps} />}
      {children}
      {bottom && <Pagenation {...paginationProps} />}
    </>
  );
}
