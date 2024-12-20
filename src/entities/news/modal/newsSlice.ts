import { PAGE_SIZE } from '@/shared/constants';
import { Ifilters } from '@/shared/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Inews } from './type';

export interface State {
  news: Inews[];
  filters: Ifilters;
  currentNews: Inews | null;
}

const initialState: State = {
  news: [],
  currentNews: null,
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  },
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<Inews[]>) => {
      state.news = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
    setCurrentNews: (state, action: PayloadAction<Inews | null>) => {
      state.currentNews = action.payload;
    },
  },
});

export const { setNews, setFilters, setCurrentNews } = newsSlice.actions;

export default newsSlice.reducer;
