import React, {useState} from "react";
import styles from './ProductSpecifications.module.scss'

import { usePDP }  from "@faststore/core"

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

// interface banner {
//   image: string;
//   name: string;
//   url: string;
//   width: string;
// }

// interface column {
//   column: banner[];
// }


export interface ProductSpecificationsList {
  headTitle: string;
}

export default function ProductSpecifications(props: ProductSpecificationsList) {

  const context = usePDP()

  console.log(context)

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
            {context?.data?.product?.description}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem index={1}>
          <AccordionButton>Specs</AccordionButton>
          <AccordionPanel>
            <Table>
              <TableBody>
                {properties.map( (spec: any, i:any) => (
                  <TableRow key={spec.i}>
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
