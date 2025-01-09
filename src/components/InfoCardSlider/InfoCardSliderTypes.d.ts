interface List {
  imageDesktop: string;
  name: string;
  url: string;
}
export interface InfoCardSliderProps {
  list: List[];
  itemsPerPage: number;
  infiniteMode: boolean;
  title: string;
  titleEnabled: boolean;
}