import { TOTAL_PAGES } from '../constants';
import { Categories } from './Categories';
import { NewsListWithSkeleton } from './NewsList.';
import { Search } from './Search';
import { useDebounce } from '../hooks/useDebounce';
import { PaginationWrapper } from './PaginationWrapper';
import { Slider } from './Slider';
import {
  useGetCategoriesQuery,
  useGetNewsQuery,
} from '../store/services/newsApi';
import { useAppDispatch, useAppSelector } from '../store';
import { setFilters } from '../store/slices/newsSlice';

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

  function hendelNextPage() {
    dispatch(
      setFilters({ key: 'page_number', value: filters.page_number + 1 })
    );
  }

  function hendelPrevPage() {
    dispatch(
      setFilters({ key: 'page_number', value: filters.page_number - 1 })
    );
  }

  function hendelPageClick(page: number) {
    dispatch(setFilters({ key: 'page_number', value: page }));
  }

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
      <PaginationWrapper
        top={true}
        bottom={true}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        hendelNextPage={hendelNextPage}
        hendelPrevPage={hendelPrevPage}
        hendelPageClick={hendelPageClick}
      >
        <NewsListWithSkeleton isLoading={isLoading} newsList={news} />
      </PaginationWrapper>
    </section>
  );
}
