interface banner {
  image: string;
}

interface tabs {
  title: string;
  banner: banner;
  content: string;
  linkText: string;
  href: string;
  
}
export interface TabContentProps {
  tabs: tabs[];
}