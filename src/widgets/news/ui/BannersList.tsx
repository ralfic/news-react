import { Inews, NewsBanner } from "@/entities/news";
import { withSkeleton } from "@/shared/hocs/withSkeleton";

interface Props {
  banners?: Inews[] | null;
}

function BannerList({ banners }: Props) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3 max-h-[1200px] overflow-y-auto scrollbar-thin max-md:overflow-y-hidden">
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
}

export const BannerListWithSkeleton = withSkeleton<Props>(
  BannerList,
  'lg',
  20,
  'row'
);
