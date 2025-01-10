import { gql } from "@faststore/core/api";

export const fragment = gql(`
  fragment ClientProduct2 on Query {
    product(locator: $locator) {
      availableInstallments {
        installmentPaymentSystemName
        installmentValue
        installmentInterest
        installmentNumber
      }
      categoryTree {
        name
        titleTag
        href
        slug
      }
      properties {
        name
        originalName
        values {
          val
        }
      }
      recommendations {
        similars {
          productName
          link
          properties {
            name
            originalName
            values {
              val
            }
          }
        }
      }
    }
  }
`);