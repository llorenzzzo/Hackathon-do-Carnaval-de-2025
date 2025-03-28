export type SearchParams = Promise<{
  city?: string;
  search?: string;
  sort?: string;
  date_time?: string;
  page?: number;
}>;

export type BlocoProps = {
  id: string;
  title: string;
  date_time: string;
  description: string;
  neighborhood: string;
  price: string;
};
