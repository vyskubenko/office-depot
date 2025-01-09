import React, {useState} from "react";
import { 
  Link,
  Carousel
 } from "@faststore/ui";
// @ts-ignore next-line

import { ImageRowProps } from './imageRowTypes'

import styles from "./styles.module.scss";

const ImageRow = (props: ImageRowProps) => {

  const [dimensions, setDimensions] = useState({dimensions: {}} as any)

  const onImgLoad = function(img:any) {
    setDimensions({height:img.target.height, width:img.target.width});
  }

  const isMobile = window.innerWidth <= 768

  const itemsPerPage = parseInt(props.itemsPerPage);
  const imageHeight = parseInt(props.imageHeight);

  return (
    <section className={styles.imageRow} data-fs-content>


      {props.titleEnabled ?? (
        <h2 className={styles.imageRow__title}>{props.title}</h2>
      )}

      <Carousel
        itemsPerPage={isMobile ? 2 : itemsPerPage}
        variant="scroll"
        className={styles.imageRow__list}
      >
        {props.list.map(({ image, name, url }, i) => (
          <div className={styles.imageRow__item} key={i}>
            <Link 
              href={url}
              className={styles.imageRow__item__link}
            >
              <picture>
                <source
                  srcSet={image}
                  data-fs-image
                />
                <img
                  src={image}
                  width={dimensions.width||'auto'}
                  height={ imageHeight ? imageHeight : dimensions.height||50}
                  alt={name}
                  loading="eager"
                  onLoad={onImgLoad}
                  className={styles.imageRow__item__image}
                />
              </picture>
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ImageRow;
