import { withSkeleton } from '../helpers/hocs/withSkeleton';
import { NewsBanner } from './NewsBanner';

function BannerList({ isLoading, banners }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3">
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
}

export const BannerListWithSkeleton = withSkeleton(BannerList, 'lg', 10, "row");
