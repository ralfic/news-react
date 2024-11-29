export interface Inews {
  author: string;
  category: string[];
  description: string;
  id: string;
  image: string;
  language: string;
  title: string;
  url: string;
  published: string;
}

export interface NewsApiResponse {
  news: Inews[];
  page: number;
  status: string;
}

export interface CategoriesApiResponse {
  categories: string[];
  description: string;
  status: string;
}

export interface Ifilters {
  page_number: number;
  page_size: number;
  category: string | null;
  keywords: string;
}

export type ParamsType = Partial<Ifilters>;

export type SkeletonType = 'lg' | 'sm';
export type DiractioneType = 'column' | 'row';

export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  hendelNextPage: () => void;
  hendelPrevPage: () => void;
  hendelPageClick: (page: number) => void;
}
