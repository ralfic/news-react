import { useEffect } from 'react';
import { NewsBanner } from '../uikit/NewsBanner';
import { useState } from 'react';
import { getNews } from '../api/apiNews';
import { SkeletonNews } from '../components/Skeleton';
import { NewsList } from '../components/NewsList.';
import { Pagenation } from '../components/Pagenation';

export function Home() {
  const [newsList, setNewsLsit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  useEffect(() => {
    async function featchNews(currentPage) {
      try {
        setIsLoading(true);
        const data = await getNews(currentPage, pageSize);
        setNewsLsit(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    featchNews(currentPage);
  }, [currentPage]);

  function hendelNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function hendelPrevPage(page) {
    setCurrentPage(currentPage - 1);
  }

  function hendelPageClick(page) {
    setCurrentPage(page);
  }

  console.log(newsList);

  return (
    <div className="flex flex-col w-full justify-center">
      {isLoading ? (
        <SkeletonNews type="lg" />
      ) : (
        <NewsBanner item={newsList[0]} />
      )}
      <div className="mx-auto mt-4">
        <Pagenation
          totalPages={totalPages}
          currentPage={currentPage}
          hendelNextPage={hendelNextPage}
          hendelPrevPage={hendelPrevPage}
          hendelPageClick={hendelPageClick}
        />
      </div>
      <div className="mt-4 ">
        <NewsList
          isLoading={isLoading}
          newsList={newsList}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}
