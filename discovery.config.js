
module.exports = {
  seo: {
  "title": "Office Depot",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "vysk",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    locale: "en-US",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "USA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://vysk.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/power%20tools",
    search: "/s?q=Brand",
    pdp: "/black-decker-20v-max-cordless-drill-combo-kit-2-tool-bd2kitcddi-black-orange-impact-combo-kit/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/black-decker-20v-max-cordless-drill-combo-kit-2-tool-bd2kitcddi-black-orange-impact-combo-kit/p",
      collection: "/power%20tools",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/black-decker-20v-max-cordless-drill-combo-kit-2-tool-bd2kitcddi-black-orange-impact-combo-kit/p",
      collection: "/power%20tools",
      collection_filtered: "/power%20tools/?category-1=power%20tools&brand=Brand&facets=category-1%2Cbrand%27",
      search: "/s?q=Brand",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://vysk.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
