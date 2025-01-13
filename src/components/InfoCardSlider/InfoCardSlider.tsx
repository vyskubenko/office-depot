import React from "react";
import { Carousel, Link } from "@faststore/ui";

import { InfoCardSliderProps } from './InfoCardSliderTypes'

import styles from "./styles.module.scss";



const InfoCardSlider = ( props: InfoCardSliderProps) => {


  let isMobile = false
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth <= 768
  }

  return (
    <section className={`section ${styles.infoCardSlider}`} data-fs-infoCard-slider data-fs-content>

      <h2 className={styles.infoCardSlider__title} data-fs-infoCard-title>{props.title}</h2>

      <Carousel
        itemsPerPage={!isMobile ? props.itemsPerPage : 2}
        variant="scroll"
        controls="navigationArrows"
        infiniteMode={props.infiniteMode}
        className={styles.infoCardSlider__Carousel}
      >
        {props.list.map(({ imageDesktop, name, url }) => (
          <div className={styles.infoCardSlider__item} key={url} data-fs-carousel-banner>
            <Link className={styles.infoCardSlider__item__link} href={url} data-fs-infoCard-link>
              <div className={styles.infoCardSlider__content}>
                <h3 className={styles.infoCardSlider__content__title}>{name}</h3>
              </div>
              <picture data-fs-image>
                <source
                  media="(max-width: 799px)"
                  srcSet={imageDesktop}
                  data-fs-image
                />
                <img src={imageDesktop} alt={`${name} image`} data-fs-image />
              </picture>
              
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default InfoCardSlider;
