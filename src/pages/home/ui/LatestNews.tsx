import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import { NewsList } from '@/widgets/news/ui';

export function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className="flex flex-col w-full gap-8 ">
      <NewsList
        news={data && data.news}
        isLoading={isLoading}
        type="banner"
        direction="row"
      />
    </section>
  );
}
