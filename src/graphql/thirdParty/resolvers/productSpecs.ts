type getProductSpecsProps = {
  sku: string
};

// import storeConfig from 'faststore.config'


const productSpecsResolver = {
  Query: {
    // The resolver to submit the contact form data, fetch only the data you need (https://developers.vtex.com/docs/guides/faststore/api-extensions-overview#best-practices-for-fetching-data)
    getProductSpecs: async (_: never, data: any) => {
      const { sku } = data?.input;


      // console.log(storeConfig)
      try {

        console.log(`resolver getProductSpecs2`, data,sku)
        return

        const response = await fetch(
          `https://uscertification06odp.myvtex.com/api/catalog_system/pvt/products/${sku}/specification`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }
        );

        console.log(response)

        return { sku: "2222" }
      } catch (error) {
        console.log(error)
        return { sku: error };
      }
    },
  },
};

export default productSpecsResolver;