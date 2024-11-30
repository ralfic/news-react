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
  