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
    recommendations: async (root: StoreProductRoot) => {

         const response = await fetch(
          `https://uscertification06odp.myvtex.com/api/catalog_system/pub/products/crossselling/similars/${root.itemId}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }
        );

        const similarProducts = await response.json();

        return { similars: similarProducts.map( (item:any) => {

          const img = item?.items[0]?.images[0];
          const imageId = img.imageId;

          const imgUrl = img?.imageUrl.replace(img.imageId, `${imageId}-200-200`)
          return { 
            productName: item.productTitle,
            link: item.linkText,
            color: item['Color Family'][0],
            img: imgUrl
          } 
        })}
    },
    
  },
};

export default productResolver;