/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "placehold.jp",
      "dummyjson.com",
      "cdn.dummyjson.com",
    ],
  },
};

module.exports = nextConfig;
