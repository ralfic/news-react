import { useState } from 'react';
import { getNews } from '../api/apiNews';
import { PAGE_SIZE } from '../constants';
import { useQuery } from 'react-query';
import { useDebounce } from '../hooks/useDebounce';
import { LatestNews } from '../components/LatestNews';
import { NewsByFilters } from '../components/NewsByFilters';

export function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectCategory, setSelectCategory] = useState('All');
  const [keywords, setKeywords] = useState('');

  const debounceKeywords = useDebounce(keywords, 1000);

  const { isLoading, data } = useQuery(
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

  return (
    <main className="w-full grid grid-cols-2 gap-6 max-lg:grid-cols-1">
      <LatestNews banners={data} isLoading={isLoading} />
      <NewsByFilters
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
        keywords={keywords}
        setKeywords={setKeywords}
        isLoading={isLoading}
        news={data}
      />
    </main>
  );
}
