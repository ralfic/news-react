import { useAppDispatch } from '@/app/appStore';
import { Inews } from '@/entities/news';
import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import { setCurrentNews } from '@/entities/news/modal/newsSlice';
import { NewsList } from '@/widgets/news/ui';
import { useNavigate } from 'react-router-dom';

export function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function navigateTo(news: Inews) {
    dispatch(setCurrentNews(news));
    navigate(`news/${news.id}`);
  }

  return (
    <section className="flex flex-col w-full gap-8 ">
      <NewsList
        news={data && data.news}
        isLoading={isLoading}
        type="banner"
        direction="row"
        viewNewsSlot={(news: Inews) => (
          <button className=" inline-flex" onClick={() => navigateTo(news)}>
            View more
          </button>
        )}
      />
    </section>
  );
}
