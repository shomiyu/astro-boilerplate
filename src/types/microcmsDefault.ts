export interface Response<T> {
  [x: string]: any;
  totalCount: number;
  offset: number;
  limit: number;
  contents: T[];
}

export interface Model {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}
