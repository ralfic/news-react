import { NewsBannerWhithSkeleton } from '../components/NewsBanner';
import { useState } from 'react';
import { getCategories, getNews } from '../api/apiNews';
import { NewsListWithSkeleton } from '../components/NewsList.';
import { Pagenation } from '../components/Pagenation';
import { Categories } from '../components/Categories';
import { Search } from '../components/Search';
import { PAGE_SIZE, TOTAL_PAGES } from '../constants';
import { useQuery } from 'react-query';
import { useDebounce } from '../hooks/useDebounce';

export function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectCategory, setSelectCategory] = useState("All");
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
    <div className="w-full flex flex-col justify-center">
      <div>
        {dataCategories && (
          <Categories
            categories={['All', ...dataCategories]}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          />
        )}
      </div>
      <div className="mt-6">
        <Search keywords={keywords} setKeywords={setKeywords} />
      </div>
      <div className="mt-6">
        <NewsBannerWhithSkeleton
          isLoading={isLoading}
          type={'lg'}
          item={data && data[0]}
        />
      </div>
      <div className="mx-auto mt-6">
        <Pagenation
          totalPages={TOTAL_PAGES}
          currentPage={currentPage}
          hendelNextPage={hendelNextPage}
          hendelPrevPage={hendelPrevPage}
          hendelPageClick={hendelPageClick}
        />
      </div>
      <div className="mt-6 ">
        <NewsListWithSkeleton
          isLoading={isLoading}
          newsList={data}
          pageSize={PAGE_SIZE}
        />
      </div>
    </div>
  );
}
