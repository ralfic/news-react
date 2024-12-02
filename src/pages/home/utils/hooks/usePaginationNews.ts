import { useAppDispatch } from '@/app/appStore';
import { setFilters } from '@/entities/news/modal/newsSlice';
import { TOTAL_PAGES } from '@/shared/constants';
import { Ifilters } from '@/shared/interfaces';

export function usePaginationNews(filters: Ifilters) {
  const dispatch = useAppDispatch();
  function hendelNextPage() {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number + 1 })
      );
    }
  }

  function hendelPrevPage() {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number - 1 })
      );
    }
  }

  function hendelPageClick(page: number) {
    dispatch(setFilters({ key: 'page_number', value: page }));
  }

  return { hendelNextPage, hendelPrevPage, hendelPageClick };
}
