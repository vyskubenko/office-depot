import type { StoreProductRoot } from "@faststore/core/api";

const productResolver = {
  StoreProduct: {
    availableInstallments: (root: StoreProductRoot) => {
        
      const installments = root.sellers?.[0]?.commertialOffer?.Installments;
        
      if (!installments.length) {
        return [];
      }

      return installments.map((installment) => ({
        installmentPaymentSystemName: installment.PaymentSystemName,
        installmentValue: installment.Value,
        installmentInterest: installment.InterestRate,
        installmentNumber: installment.NumberOfInstallments,
      }));
    },
    properties: (root: StoreProductRoot) => {

        const specs = root.isVariantOf.properties;

        if (!specs.length) {
        return [];
        }

        return specs.map((specs) => ({
        name: specs.name,
        values: specs.values.map(item => {
            return { val: item } 
           })
        }));
    },
    categoryTree: (root: StoreProductRoot) => {

        const specs = root;

        //console.log(root.isVariantOf.items[0])

        // if (!specs.length) {
        // return [];
        // }

        // return specs.map((specs) => ({
        // name: specs.name,
        // values: specs.values.map(item => {
        //     return { val: item } 
        //    })
        // }));
    },
    
  },
};

export default productResolver;