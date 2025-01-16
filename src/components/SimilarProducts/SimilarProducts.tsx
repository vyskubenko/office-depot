import React from "react";
import styles from './SimilarProducts.module.scss'

import { 
  Link
 } from "@faststore/ui";

import { usePDP }  from "@faststore/core"

export default function SimilarProducts() {


  const context = usePDP()

  const similar = context?.data?.product?.recommendations?.similars;

  if (!similar.length) {
    return null
  }
  
  return (
    <section className={styles.SimilarProducts} data-fs-content="product-details">
      <div className={styles.SimilarProducts__wrap} >
        <p className={styles.SimilarProducts__title}>Color Swatch</p>
        <ul className={styles.SimilarProducts__list} data-fs-product-details-info="true">
          
          {similar.map((similar:any, i:number) => (
              <li className={styles.SimilarProducts__list__item} key={i}>
                <Link 
                  href={`/${similar.link}/p`}
                  className={styles.SimilarProducts__list__item__link}
                >
                  <span
                    className={styles.SimilarProducts__list__item__thumb}
                    style={{ background: similar.color }}
                    aria-label={similar.name}
                  >
                  </span>
                  {/* <picture>
                    <source
                      srcSet={similar.img}
                      data-fs-image
                    />
                    <img
                      src={similar.img}
                      width={200}
                      height={200}
                      alt={similar.productName}
                      loading="eager"
                      className={styles.SimilarProducts__list__item__image}
                    />
                  </picture>
                  <p>{similar.productName}</p> */}
                </Link>
              </li>
            ))}
        </ul>
        </div>
    </section>
  );
}
