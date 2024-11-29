import { IPaginationProps } from '../interfaces';
import { Pagenation } from './Pagenation';

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
  
}

export function PaginationWrapper({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <Pagenation {...paginationProps} />}
      {children}
      {bottom && <Pagenation {...paginationProps} />}
    </>
  );
}
