import { useQuery } from 'react-query';
import { PAGE_SIZE, TOTAL_PAGES } from '../constants';
import { Categories } from './Categories';
import { NewsListWithSkeleton } from './NewsList.';
import { Search } from './Search';
import { getCategories, getNews } from '../api/apiNews';
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { PaginationWrapper } from './PaginationWrapper';
import { Slider } from './Slider';
import { CategoriesApiResponse, NewsApiResponse } from '../interfaces';

export function NewsByFilters() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectCategory, setSelectCategory] = useState<string | null>('All');
  const [keywords, setKeywords] = useState<string>('');

  const debounceKeywords = useDebounce(keywords, 1000);

  const { isLoading, data } = useQuery<NewsApiResponse>(
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

  const { data: dataCategories } = useQuery<CategoriesApiResponse, null>(
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

  function hendelPageClick(page: number) {
    setCurrentPage(page);
  }

  return (
    <section className="flex flex-col gap-6">
      {dataCategories && (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          />
        </Slider>
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
        <NewsListWithSkeleton isLoading={isLoading} newsList={data?.news} />
      </PaginationWrapper>
    </section>
  );
}
