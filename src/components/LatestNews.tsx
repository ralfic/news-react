import { BannerListWithSkeleton } from './BannersList';
import { useGetLatestNewsQuery } from '../store/services/newsApi';

export function LatestNews() {
  const { data,  isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className="flex flex-col w-full gap-8 ">
      <BannerListWithSkeleton banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}
