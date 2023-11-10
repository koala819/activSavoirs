const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
  defaultSizes: "gzip",
});

module.exports = withBundleAnalyzer({
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    MAIL_FROM: process.env.MAIL_FROM,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_PWD: process.env.MAIL_PWD,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_SERVER: process.env.MAIL_SERVER,
  },
  images: {
    domains: ["images.unsplash.com", "images.prismic.io"],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  swcMinify: true,
});
