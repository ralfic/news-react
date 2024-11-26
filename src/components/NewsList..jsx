import { NewsBanner } from "../uikit/NewsBanner";
import { SkeletonNews } from "./Skeleton";

export function NewsList({ isLoading, newsList }) {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {newsList.length > 0 && !isLoading ? (
        newsList.map((el) => <NewsBanner key={el.id} item={el} size="lg" />)
      ) : (
        <SkeletonNews count={20} type="lg" />
      )}
    </ul>
  );
}
