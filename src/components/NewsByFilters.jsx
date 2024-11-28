import { useQuery } from 'react-query';
import { PAGE_SIZE, TOTAL_PAGES } from '../constants';
import { Categories } from './Categories';
import { NewsListWithSkeleton } from './NewsList.';
import { Pagenation } from './Pagenation';
import { Search } from './Search';
import { getCategories, getNews } from '../api/apiNews';
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { PaginationWrapper } from './PaginationWrapper';

export function NewsByFilters() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectCategory, setSelectCategory] = useState('All');
  const [keywords, setKeywords] = useState('');

  const debounceKeywords = useDebounce(keywords, 1000);

  const { isLoading, data: news } = useQuery(
    [currentPage, selectCategory, debounceKeywords],
    () =>
      getNews({
        page_number: currentPage,
        page_size: PAGE_SIZE,
        category: selectCategory === 'All' ? null : selectCategory,
        keywords: keywords,
      }),
    {
      keepPreviousData: true,
    }
  );

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
      <PaginationWrapper
        top={true}
        bottom={true}
        totalPages={TOTAL_PAGES}
        currentPage={currentPage}
        hendelNextPage={hendelNextPage}
        hendelPrevPage={hendelPrevPage}
        hendelPageClick={hendelPageClick}
      >
        <NewsListWithSkeleton isLoading={isLoading} newsList={news} />
      </PaginationWrapper>
    </section>
  );
}
