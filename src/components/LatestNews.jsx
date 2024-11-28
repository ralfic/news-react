import { useQuery } from 'react-query';
import { BannerListWithSkeleton } from './BannersList';
import { getLatestNews } from '../api/apiNews';

export function LatestNews() {
  const { isLoading, data: banners } = useQuery(
    'getLatestNews',
    () => getLatestNews(),
    {
      keepPreviousData: true,
    }
  );
  
  return (
    <section className="flex flex-col w-full gap-8 ">
      <BannerListWithSkeleton banners={banners} isLoading={isLoading} />
    </section>
  );
}
