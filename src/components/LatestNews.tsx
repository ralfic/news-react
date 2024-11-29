import { useQuery } from 'react-query';
import { BannerListWithSkeleton } from './BannersList';
import { getLatestNews } from '../api/apiNews';
import {  NewsApiResponse } from '../interfaces';

export function LatestNews() {
  const { isLoading, data: banners } = useQuery<NewsApiResponse, null>(
    'getLatestNews',
    () => getLatestNews(),
    {
      keepPreviousData: true,
    }
  );

  return (
    <section className="flex flex-col w-full gap-8 ">
      <BannerListWithSkeleton banners={banners && banners.news} isLoading={isLoading} />
    </section>
  );
}
