
module.exports = {
  seo: {
  "title": "Vysk",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "Lucas Vysk"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "uscertification06odp",
    workspace: 'faststore',
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
  storeUrl: "https://uscertification06odp.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/apparel",
    search: "/s?q=Brand",
    pdp: "/avery®-file-folder-labels-on-4-x-6-sheet-with-easy-peel--5204--rectangle--2-3-x-3-7-16--white-with-purple-color-bar--pack-of-252-labels-112375/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/avery®-file-folder-labels-on-4-x-6-sheet-with-easy-peel--5204--rectangle--2-3-x-3-7-16--white-with-purple-color-bar--pack-of-252-labels-112375/p",
      collection: "/apparel",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/avery®-file-folder-labels-on-4-x-6-sheet-with-easy-peel--5204--rectangle--2-3-x-3-7-16--white-with-purple-color-bar--pack-of-252-labels-112375/p",
      collection: "/apparel",
      collection_filtered: "/apparel?initialMap=c&initialQuery=apparel&map=category-1,clothes-size",
      search: "/s?q=Brand",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://faststore--uscertification06odp.myvtex.com/cms-releases/webhook-releases",
    ],
  },

  webpack(config) {
    config.module.rules.push({
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/,
    },

    {
      test: /\.svg$/i,
      issuer: fileLoaderRule.issuer,
      resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
      use: ["@svgr/webpack"],
    });

    fileLoaderRule.exclude = /\.svg$/i;
    
    return config;
  },
}
