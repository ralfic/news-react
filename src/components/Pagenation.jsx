import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagenation({
  totalPages,
  currentPage,
  hendelNextPage,
  hendelPrevPage,
  hendelPageClick,
}) {
  console.log(totalPages);
  return (
    <div className="flex gap-3">
      <button
        className={clsx(
          'hover:text-black transition-colors',
          currentPage === 1 && 'text-gray-400'
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
              'hover:text-black transition-colors',
              currentPage === index + 1 ? 'text-black' : 'text-gray-500'
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
          'hover:text-black transition-colors',
          currentPage === totalPages && 'text-gray-400'
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
