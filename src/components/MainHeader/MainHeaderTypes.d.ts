interface subMenuLinks3 {
    title: string;
    href: string;
    image: string;
    headTitle: boolean;
  }
  
  interface subMenuLinks {
    title: string;
    href: string;
    headTitle: boolean;
    submenu: subMenuLinks3[];
  }
  
  interface menuLinks {
    title: string;
    href: string;
    submenu: subMenuLinks[];
  }

  interface infoTextArray {
    text: string;
    color: string;
  }
  
  interface topBarInfo {
    infoText: infoTextArray[];
    link: string;
    ico: string;
  }
  
  interface navButtons {
    title: string;
    icon: string;
    href: string;
  }
  
  export interface MainHeaderProps {
    navbar: OverrideNavigationProps["searchInput"];
    cart: OverrideNavigationProps["cartIcon"];
    logoLink: {
      text: string;
      url: string;
    };
    logo: {
      alt: string;
      src: string;
      link: {
        url: string;
        title: string;
      };
    };
    topbar: topBarInfo[];
    region: {
      enabled:boolean;
    };
    navButtons: navButtons[];
    menu: menuLinks[];
  }