import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { Categories } from '@/features/category/ui/Categories';
import { Slider } from '@/features/slider/ui/Slider';
import { TOTAL_PAGES } from '@/shared/constants';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { setFilters } from '@/entities/news/modal/newsSlice';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { NewsList } from '@/widgets/news/ui';
import { Search } from '@/features/search';
import { Pagination } from '@/features/pagination';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import { usePaginationNews } from '../utils/hooks/usePaginationNews';

export function NewsByFilters() {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debounceKeywords = useDebounce(filters.keywords, 1000);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debounceKeywords,
  });

  const { data: dataCategories } = useGetCategoriesQuery(null);

  const { hendelNextPage, hendelPrevPage, hendelPageClick } =
    usePaginationNews(filters);

  return (
    <section className="flex flex-col gap-6">
      {dataCategories && (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectCategory={filters.category}
            setSelectCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      )}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: 'keywords', value: keywords }))
        }
      />
      <Pagination
        top={true}
        bottom={true}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        hendelNextPage={hendelNextPage}
        hendelPrevPage={hendelPrevPage}
        hendelPageClick={hendelPageClick}
      >
        <NewsList
          isLoading={isLoading}
          news={news}
          type="item"
          direction="column"
        />
      </Pagination>
    </section>
  );
}
