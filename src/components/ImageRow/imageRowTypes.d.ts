interface List {
  image: string;
  name: string;
  url: string;
}
export interface ImageRowProps {
  list: List[];
  title: string;
  imageHeight: string;
  itemsPerPage: string;
  titleEnabled: string;
}