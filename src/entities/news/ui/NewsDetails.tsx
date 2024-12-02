import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import { Inews } from '..';
import { Image } from '@/shared/ui/Image';

interface Props {
  news: Inews;
}

export function NewsDetails({ news }: Props) {
  return (
    <div className="flex w-full  flex-col">
      <h3 className="font-bold text-4xl leading-10 mb-4">{news.title}</h3>
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <Image image={news.image} size="banner" />
        <div>
          <p className="text-xl mb-2">
            {news.description}
            <a className="text-blue-900 " href={news.url}>
              Read more...
            </a>
          </p>
          <p className="mb-2 leading-4 font-semibold dark:text-gray-500 flex-initial">{`${formatTimeAgo(
            news.published
          )} by ${news.author}`}</p>
          <ul className="inline-flex gap-2">
            {news.category.map((el, i) => (
              <li
                className="px-3 py-1.5 bg-indigo-100 text-violet-500 rounded-2xl text-center text-sm w-full "
                key={i}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
