/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "bilalturkmen.com",
      "avatars.githubusercontent.com",
      "robohash.org",
      "placehold.jp",
    ],
  },
};

module.exports = nextConfig;
