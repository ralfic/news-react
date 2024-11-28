import { useQuery } from 'react-query';
import { TOTAL_PAGES } from '../constants';
import { Categories } from './Categories';
import { NewsListWithSkeleton } from './NewsList.';
import { Pagenation } from './Pagenation';
import { Search } from './Search';
import { getCategories } from '../api/apiNews';

export function NewsByFilters({
  currentPage,
  setCurrentPage,
  selectCategory,
  setSelectCategory,
  keywords,
  setKeywords,
  isLoading,
  news,
}) {
  
  const { data: dataCategories } = useQuery(
    'getCategories',
    () => getCategories(),
    {
      keepPreviousData: true,
    }
  );

  function hendelNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function hendelPrevPage() {
    setCurrentPage(currentPage - 1);
  }

  function hendelPageClick(page) {
    setCurrentPage(page);
  }

  return (
    <section className="flex flex-col gap-6">
      {dataCategories && (
        <Categories
          categories={['All', ...dataCategories]}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      )}
      <Search keywords={keywords} setKeywords={setKeywords} />
      <Pagenation
        totalPages={TOTAL_PAGES}
        currentPage={currentPage}
        hendelNextPage={hendelNextPage}
        hendelPrevPage={hendelPrevPage}
        hendelPageClick={hendelPageClick}
      />
      <NewsListWithSkeleton isLoading={isLoading} newsList={news} />
    </section>
  );
}
