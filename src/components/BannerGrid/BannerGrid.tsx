import React from "react";
import { Link } from "@faststore/ui";
import styles from './BannerGrid.module.scss'

import {
  Image_unstable as Image,
  // @ts-ignore next-line
} from "@faststore/core/experimental";


import { bannerArray } from './BannerGridTypes'

export default function BannerGrid(props: bannerArray) {
  
  const BannerGrid = props
  
  return (
    <section className={styles.bannerGrid} data-fs-content="BannerGrid">
      {BannerGrid.row?.length && BannerGrid.row.map((Row, bgix) => (
        <div className={styles.bannerGrid__row} key={bgix}>
           {Row.column?.length && Row.column.map((banner, bix) => (
              <div className={styles.bannerGrid__col} key={bix}  style={{ width:`${banner.width}%` }}>
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
