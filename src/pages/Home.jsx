import { useEffect } from 'react';
import { NewsBanner } from '../uikit/NewsBanner';
import { useState } from 'react';
import { getNews } from '../api/apiNews';

export function Home() {
  const [newsList, setNewsLsit] = useState([]);
  useEffect(() => {
    async function featchNews() {
      try {
        const data = await getNews();
        setNewsLsit(data);
      } catch (error) {
        console.log(error);
      }
    }
    featchNews();
  }, []);

  return (
    <div>
      <ul className='grid grid-cols-4 gap-2'>
        {newsList.length > 0 &&
          newsList.map((el) => <NewsBanner key={el.id} item={el} size='sm' />)}
      </ul>
    </div>
  );
}
