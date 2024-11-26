import { useEffect } from 'react';
import { NewsBanner } from '../uikit/NewsBanner';
import { useState } from 'react';
import { getNews } from '../api/apiNews';
import { SkeletonNews } from '../components/Skeleton';
import { NewsList } from '../components/NewsList.';

export function Home() {
  const [newsList, setNewsLsit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function featchNews() {
      try {
        setIsLoading(true);
        const data = await getNews();
        setNewsLsit(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    featchNews();
  }, []);

  return (
    <div>
      <NewsList isLoading={isLoading} newsList={newsList} />
    </div>
  );
}
