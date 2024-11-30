export interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    hendelNextPage: () => void;
    hendelPrevPage: () => void;
    hendelPageClick: (page: number) => void;
  }
  