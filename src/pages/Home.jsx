import { useEffect } from 'react';
import { NewsBanner } from '../components/NewsBanner';
import { useState } from 'react';
import { getCategories, getNews } from '../api/apiNews';
import { SkeletonNews } from '../components/Skeleton';
import { NewsList } from '../components/NewsList.';
import { Pagenation } from '../components/Pagenation';
import { Categories } from '../components/Categories';
import { Search } from '../components/Search';
import { useDebounce } from '../hooks/useDebounce';

export function Home() {
  const [newsList, setNewsLsit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState('All');
  const [keywords, setKeywords] = useState('');
  const totalPages = 10;
  const pageSize = 10;
  const debouncedKeywords = useDebounce(keywords, 1500);

  useEffect(() => {
    async function featcCategories() {
      try {
        const data = await getCategories();
        setCategories(['All', ...data]);
      } catch (error) {
        console.log(error);
      }
    }
    featcCategories();
  }, []);

  useEffect(() => {
    async function featchNews(currentPage) {
      try {
        setIsLoading(true);
        const data = await getNews({
          page_number: currentPage,
          page_size: pageSize,
          category: selectCategory === 'All' ? null : selectCategory,
          keywords,
        });
        setNewsLsit(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    featchNews(currentPage);
  }, [currentPage, selectCategory, debouncedKeywords]);

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
    <div className="flex flex-col w-full justify-center">
      <div>
        <Categories
          categories={categories}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </div>
      <div className="mt-6">
        <Search keywords={keywords} setKeywords={setKeywords} />
      </div>
      <div className="mt-6">
        {isLoading ? (
          <SkeletonNews type="lg" />
        ) : (
          <NewsBanner item={newsList[0]} />
        )}
      </div>
      <div className="mx-auto mt-6">
        <Pagenation
          totalPages={totalPages}
          currentPage={currentPage}
          hendelNextPage={hendelNextPage}
          hendelPrevPage={hendelPrevPage}
          hendelPageClick={hendelPageClick}
        />
      </div>
      <div className="mt-6 ">
        <NewsList
          isLoading={isLoading}
          newsList={newsList}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}
