import clsx from 'clsx';

export function Categories({ categories, selectCategory, setSelectCategory }) {
  return (
    <div className="flex gap-2 items-start overflow-x-auto whitespace-nowrap box-border scrollbar-none">
      {categories?.map((category) => (
        <button
          key={category}
          className={clsx(
            'px-3 py-1.5 bg-gray-100 rounded-2xl text-sm w-full ',
            selectCategory === category && 'text-violet-500 bg-violet-100'
          )}
          onClick={() => setSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
