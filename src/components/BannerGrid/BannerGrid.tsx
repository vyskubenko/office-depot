import React from "react";
import { Link } from "@faststore/ui";
import styles from './BannerGrid.module.scss'

import {
  useSession_unstable as useSession,
  Image_unstable as Image,
  // @ts-ignore next-line
} from "@faststore/core/experimental";

interface banner {
  image: string;
  name: string;
  url: string;
}

interface column {
  column: banner[];
}


export interface bannerArray {
  row: column[];
}

export default function BannerGrid(props: bannerArray) {

  console.log(props)

  const BannerGrid = props
  
  return (
    <section className={styles.bannerGrid} data-fs-content="BannerGrid">
      {BannerGrid.row?.length && BannerGrid.row.map((Row, bgix) => (
        <div className={styles.bannerGrid__row} key={bgix}>
           {Row.column?.length && Row.column.map((banner, bix) => (
              <div className={styles.bannerGrid__col} key={bix}>
                <Link href={banner.url}>
                  <picture>
                    <Image
                      data-fs-image
                      src={banner.image}
                      alt={banner.name}
                      loading="eager"
                      width={400}
                      height={300}
                      sizes="(max-width: 360px) 50vw, (max-width: 768px) 90vw, 50vw"
                    />
                  </picture>
                </Link>
              </div>
            ))}
        </div>
      ))}
 
    </section>
  );
}
