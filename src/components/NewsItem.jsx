import { formatTimeAgo } from '../helpers/formatTimeAgo';

export function NewsItem({ item }) {
  return (
    <li className="flex gap-3">
      {item.image !== 'None' ? (
        <img className="h-16 w-16" src={item.image} />
      ) : (
        <div className="bg-gray-200 h-16 w-16 flex-initial"></div>
      )}
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="font-semibold text-sm leading-5">{item.title}</h3>
        <p className="text-xs leading-4">{`${formatTimeAgo(
          item.published
        )} by ${item.author}`}</p>
      </div>
    </li>
  );
}
