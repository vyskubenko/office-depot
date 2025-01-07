import React from "react";
import styles from './CustomBreadcrumb.module.scss'

import { usePDP }  from "@faststore/core"

import { Breadcrumb } from '@faststore/ui'

import SVGIMG from '!@svgr/webpack!../../assets/accountIcon.svg';



export interface CustomBreadcrumbProps {
  showSku: boolean;
  color: string;
}

export default function CustomBreadcrumb(props: CustomBreadcrumbProps) {


  const context = usePDP()

  let breadCrumb = context?.data?.product?.breadcrumbList?.itemListElement
  const productId = context?.data?.product?.id

  if (!breadCrumb || !breadCrumb.length) {
    return null
  }


  if(props?.showSku) {
    breadCrumb[breadCrumb.length-1] = {
      item: '#',
      name: `Item #${productId}`,
      position: breadCrumb.length-1
    }
  }
  
  return (
    <section className={styles.CustomBreadcrumb} >
        <SVGIMG fill="red" width={222} />
      <Breadcrumb breadcrumbList={breadCrumb} />
    </section>
  );
}
