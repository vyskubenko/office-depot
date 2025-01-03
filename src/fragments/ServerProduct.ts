import { gql } from "@faststore/core/api";

export const fragment = gql(`
  fragment ServerProduct on Query {
    product(locator: $locator) {
      availableInstallments {
        installmentPaymentSystemName
        installmentValue
        installmentInterest
        installmentNumber
      }
      properties {
        name
        originalName
        values {
            val
        }
      }
    }
  }
`);