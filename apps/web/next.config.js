/** @type {import('next').NextConfig} */
const nextI18nConfig = require('./next-i18next.config');

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: [
    '@workhumanweb/ui',
    '@workhumanweb/api',
    '@workhumanweb/algolia-indexing-job',
    '@workhumanweb/common-i18n',
  ],
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  // experimental: {
  //   adjustFontFallbacks: true,
  // },
  experimental: {
    forceSwcTransforms: true,
    // nextScriptWorkers: true,
    scrollRestoration: true,
    outputFileTracingExcludes: {
      '*': [
        './node_modules/sharp/vendor/**/*',
        './node_modules/@esbuild/**/*',
        './node_modules/esbuild/**/*',
        './node_modules/@swc/core-linux-x64-musl/**/*',
        './node_modules/@swc/core-linux-x64-gnu/**/*',
        './node_modules/@swc/core-darwin-x64/**/*',
        './node_modules/@fortawesome/pro-regular-svg-icons/index.js',
        './node_modules/@fortawesome/pro-solid-svg-icons/index.js',
      ],
    },
  },
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'www.workhuman.com',
      },
      {
        protocol: 'https',
        hostname: 'www.workhumanpreprod.com',
      },
      {
        protocol: 'https',
        hostname: 'embed-ssl.wistia.com',
      },
      {
        protocol: 'https',
        hostname: 'netlify.app',
      },
    ],
  },
  env: {
    CF_SPACE_ID: process.env.CF_SPACE_ID,
    CF_DELIVERY_ACCESS_TOKEN: process.env.CF_DELIVERY_ACCESS_TOKEN,
    CF_PREVIEW_ACCESS_TOKEN: process.env.CF_PREVIEW_ACCESS_TOKEN,
    CF_CMA_TOKEN: process.env.CF_CMA_TOKEN,
    CF_ENVIRONMENT: process.env.CF_ENVIRONMENT,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_MARKETO_MUNCHKIN_ID:
      process.env.NEXT_PUBLIC_MARKETO_MUNCHKIN_ID,
    NEXT_PUBLIC_MARKETO_CONVERSION_FORM_ID:
      process.env.NEXT_PUBLIC_MARKETO_CONVERSION_FORM_ID,
    NEXT_PUBLIC_MARKETO_CONVERSION_FIELD_NAME:
      process.env.NEXT_PUBLIC_MARKETO_CONVERSION_FIELD_NAME,
    NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    NEXT_PUBLIC_ALGOLIA_SEARCH_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
    NEXT_PUBLIC_ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX,
    CONTENTFUL_PREVIEW_SECRET: process.env.CONTENTFUL_PREVIEW_SECRET,
    BRANCH: process.env.BRANCH,
  },
  i18n: nextI18nConfig.i18n,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "form-action 'self' *.facebook.com; frame-ancestors 'self' app.contentful.com; frame-src 'self' *.workhuman.com *.workhumanpreprod.com app.netlify.com *.googletagmanager.com *.doubleclick.net *.cdn.optimizely.com pixel.mathtag.com cdn.useproof.com *.cookiebot.com *.facebook.com *.twitter.com 862-jiq-698.mktoweb.com cookie.havasedge.com fast.wistia.net youtube.com www.youtube.com bat.bing.com  ; base-uri 'none'; object-src 'self'; child-src 'self' *.fls.doubleclick.net; upgrade-insecure-requests; report-uri https://68cebcfc7e2f58b08b59066f1.report-uri.com/r/d/csp/enforce",
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*.cookiebot.com',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/events/spotlight/:series',
        destination: '/spotlight-landing/:series',
      },
    ];
  },
};
