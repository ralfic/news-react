import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IPaginationProps } from '../model/types';


export function PagenationButtons({
  totalPages,
  currentPage,
  hendelNextPage,
  hendelPrevPage,
  hendelPageClick,
}: IPaginationProps) {
  return (
    <div className="flex gap-3 mx-auto">
      <button
        className={clsx(
          'hover:text-black transition-colors dark:hover:text-indigo-200',
          currentPage === 1 && 'text-gray-400 dark:text-gray-200'
        )}
        disabled={currentPage === 1}
        onClick={hendelPrevPage}
      >
        <ChevronLeft />
      </button>
      <div className="flex gap-5">
        {[...Array(totalPages)].map((_, index) => (
          <button
            className={clsx(
              'hover:text-black transition-colors dark:hover:text-indigo-200',
              currentPage === index + 1
                ? 'text-black dark:text-indigo-400'
                : 'text-gray-500 dark:text-gray-200'
            )}
            key={index}
            onClick={() => hendelPageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className={clsx(
          'hover:text-black transition-colors dark:hover:text-indigo-200',
          currentPage === totalPages && 'text-gray-400 dark:text-gray-200'
        )}
        disabled={currentPage === totalPages}
        onClick={hendelNextPage}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
2;
