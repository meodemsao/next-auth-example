const { redirect } = require("next/dist/server/api-utils");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/du-an-dau-thau-:slug",
        destination: "/project/:slug",
      },
      {
        source: "/goi-thau-:slug*-gia-tu-:slug2*",
        destination: "/package/:slug/:slug2",
      },
      {
        source: "/thong-bao-moi-thau-hang-hoa-:slug",
        destination: "/notification/:slug",
      },
      {
        source: "/thong-bao-moi-thau-xay-lap-:slug",
        destination: "/notification/:slug",
      },
    ];
  },
  async redirect() {
    return [{
      source: "/server",
      destination: "/chu",
      permanent: true,
    }];
  },
};

module.exports = nextConfig;
