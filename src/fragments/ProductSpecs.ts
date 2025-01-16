import { gql } from "@faststore/core/api";

export const fragment = gql(`
query GetProductSpecs($data: ContactFormInput!) {
    getProductSpecs(input: $data) {
    sku
  }
}
`);