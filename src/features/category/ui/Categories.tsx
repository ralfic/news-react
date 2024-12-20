import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

interface Props {
  categories: string[];
  selectCategory: string | null;
  setSelectCategory: (category: string | null) => void;
}

export const Categories = forwardRef(function (
  { categories, selectCategory, setSelectCategory }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {

  return (
    <div
      className="flex gap-2 items-start overflow-x-auto whitespace-nowrap box-border scrollbar-none scroll-smooth"
      ref={ref}
    >
      <button
        className={clsx(
          'px-3 py-1.5 bg-gray-100 dark:bg-white rounded-2xl text-sm w-full dark:text-black',
          !selectCategory &&
            'text-violet-500 dark:text-violet-500 bg-indigo-100 dark:bg-indigo-100'
        )}
        onClick={() => setSelectCategory(null)}
      >
        {'All'}
      </button>
      {categories?.map((category) => (
        <button
          key={category}
          className={clsx(
            'px-3 py-1.5 bg-gray-100 dark:bg-white rounded-2xl text-sm w-full dark:text-black',
            selectCategory === category &&
              'text-violet-500 dark:text-violet-500 bg-indigo-100 dark:bg-indigo-100'
          )}
          onClick={() => setSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
});

Categories.displayName = 'Categories';
