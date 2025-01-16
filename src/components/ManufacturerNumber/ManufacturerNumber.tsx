import React from "react";
import styles from './ManufacturerNumber.module.scss'

import { usePDP }  from "@faststore/core"

export default function ManufacturerNumber() {


  const context = usePDP()

  const properties = context?.data?.product?.properties;

  let ManufacturerNumber = properties?.find((spec: any) => spec.name === "Manufacturer Part Number")?.values?.[0].val

  if (!ManufacturerNumber || !properties.length) {
    return null
  }
  
  
  return (
    <section className={styles.ManufacturerNumber} data-fs-content="ManufacturerNumber" >
      Manufacturer #{ManufacturerNumber}
    </section>
  );
}
