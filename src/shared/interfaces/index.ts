

export interface Ifilters {
  page_number: number;
  page_size: number;
  category: string | null;
  keywords: string;
}

export type ParamsType = Partial<Ifilters>;

export type SkeletonType = 'banner' | 'item';
export type DirectioneType = 'column' | 'row';

