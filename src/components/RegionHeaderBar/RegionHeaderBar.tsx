import React from "react";
import styles from './RegionHeaderBar.module.scss'

import {
  RegionBar,
  useUI,
  Icon
} from "@faststore/ui";

import {
  useSession_unstable as useSession,
  Image_unstable as Image,
  // @ts-ignore next-line
} from "@faststore/core/experimental";


import TopBarItem from '../CustomHeader/TopBarItem'


interface infoTextArray {
  text: string;
  color: string;
}

interface topBarInfo {
  infoText: infoTextArray[];
  link: string;
  ico: string;
}


export interface RegionHeader {
  topbar: topBarInfo[];
}

export default function RegionHeaderBar(props: RegionHeader) {


  const { modal, openModal } = useUI();
  const { postalCode } = useSession();

  const RegionHeaderBarProps = props
  
  return (
    <section className={styles.RegionHeaderBar}>

      <div className={styles.RegionHeaderBar__wrapper}>
        <div className={styles.RegionHeaderBar__info}>
            <TopBarItem topbar={RegionHeaderBarProps.topbar} ></TopBarItem>
        </div>

        <RegionBar
          label="Set your location"
          editLabel="Deliver to: "
          icon={<Icon name="MapPin" />}
          postalCode={postalCode}
          className={styles.RegionHeaderBar__region}
          onButtonClick={() => openModal()}
        />
      </div>
    </section>
  );
}
