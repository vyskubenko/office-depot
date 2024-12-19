import React, { useState, ReactElement, FC } from "react";
import {
  Link,
  Button,
  Hero, 
  HeroImage, 
  HeroHeader
} from "@faststore/ui";

import styles from "./styles.module.scss";

// @ts-ignore next-line
import { Image_unstable as Image } from "@faststore/core/experimental";


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

const TabContent: FC<TabContentProps> = ({ tabs }): ReactElement => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);


  console.log(tabs)

  return (
    <section className={styles.tabContent} data-fs-content>
      <div className={`${styles.tabContent__header} tab__header`}>
        {tabs.map((item, index) => (
          <Link
            key={index}
            variant={index === activeTab ? "display" : "default"}
            onClick={() => {
              setLoading(true);
              setActiveTab(index);
            }}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className={`${styles.tabContent__container} tab__container`}>

        <Hero 
          colorVariant="light"
          className={styles.tabContent__Hero}
        >
          <HeroImage>
            <img
              alt={tabs[activeTab].title}
              src={tabs[activeTab].banner.image}
            />
          </HeroImage>
          <HeroHeader
            title={tabs[activeTab].title}
            subtitle={tabs[activeTab].content}
            link={tabs[activeTab].href}
            linkText={tabs[activeTab].linkText}
          />
        </Hero>
      </div>
    </section>
  );
};

export default TabContent;
