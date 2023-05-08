/** @type {import('next').NextConfig} */
const { FORCE_COLOR } = process.env;
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: FORCE_COLOR,
    // HYPGRAPH_ENDPOINT: '',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
