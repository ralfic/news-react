import { BannerListWithSkeleton } from './BannersList';

export function LatestNews({ banners, isLoading }) {
  return (
    <section className="flex flex-col w-full gap-8 ">
      <BannerListWithSkeleton banners={banners} isLoading={isLoading} />
    </section>
  );
}
