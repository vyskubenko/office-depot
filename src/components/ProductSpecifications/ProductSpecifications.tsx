import React, {useState, useEffect} from 'react';
import styles from './ProductSpecifications.module.scss'

import { usePDP }  from '@faststore/core'

import { useLazyQuery_unstable as useLazyQuery } from '@faststore/core/experimental';

import { fragment as productSpecQuery } from './../../fragments/ProductSpecs'

import { 
  Table,
  TableBody,
  TableRow,
  TableCell,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
 } from "@faststore/ui";
// @ts-ignore next-line

import { ProductSpecificationsList } from './ProductSpecificationsTypes'



export default function ProductSpecifications(props: ProductSpecificationsList) {

  const context = usePDP()
  const prodId = context?.data?.product?.id;

  const specQuery = { data: { sku: prodId } };

  const [getProductSpecs, { data, error }] = useLazyQuery(productSpecQuery,specQuery);
  getProductSpecs(specQuery)

  console.log(`specsProps`, data)

  //-----

  const properties = context?.data?.product?.properties;

  if (!properties || !properties.length) {
    return null;
  }

  const [indices, setIndices] = useState(new Set([0]))
  const onChange = (index:any) => {
    if (indices.has(index)) {
      indices.delete(index)
      setIndices(new Set(indices))
    } else {
      setIndices(new Set(indices.add(index)))
    }
  }
  
  return (
    <section className={styles.ProductSpecificationsList} data-fs-content="ProductSpecificationsList">

      <Accordion indices={indices} onChange={onChange}>
      
        <AccordionItem index={0}>
          <AccordionButton>Description</AccordionButton>
          <AccordionPanel>
            <p>{context?.data?.product?.description}</p><br/>

            <p>{properties?.find((spec: any) => spec.name === "FamilyCopyBullets")?.values?.[0].val}</p><br/>

            <p>{properties?.find((spec: any) => spec.name === "Item Copy Bullets")?.values?.[0].val}</p><br/>

            <p>{properties?.find((spec: any) => spec.name === "Item Claims Bullet")?.values?.[0].val}</p>

          </AccordionPanel>
        </AccordionItem>

        <AccordionItem index={1}>
          <AccordionButton>Specs</AccordionButton>
          <AccordionPanel>
            <Table>
              <TableBody>
                {properties.map( (spec: any, i:any) => (
                  <TableRow key={i}>
                    <TableCell variant="header" align="left">
                      {spec.name}
                    </TableCell>
                    <TableCell align="right">
                      {spec.values?.[0].val}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionPanel>
        </AccordionItem>

    </Accordion>
    

      
    </section>
  );
}
