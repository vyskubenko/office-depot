interface banner {
  image: string;
  name: string;
  url: string;
  width: string;
}

interface column {
  column: banner[];
}


export interface bannerArray {
  row: column[];
}