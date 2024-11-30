import { IPaginationProps } from "../model/types";
import { PagenationButtons } from "./PagenationButtons";


interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

export function Pagination({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <PagenationButtons {...paginationProps} />}
      {children}
      {bottom && <PagenationButtons {...paginationProps} />}
    </>
  );
}
