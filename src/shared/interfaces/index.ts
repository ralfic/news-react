

export interface Ifilters {
  page_number: number;
  page_size: number;
  category: string | null;
  keywords: string;
}

export type ParamsType = Partial<Ifilters>;

export type SkeletonType = 'lg' | 'sm';
export type DiractioneType = 'column' | 'row';

