import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { BannerListWithSkeleton } from "@/widgets/news/ui";


export function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className="flex flex-col w-full gap-8 ">
      <BannerListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
}
