/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
        pathname: "/my-account/**",
      },
    ],
    domains: ['www.datocms-assets.com'],
  },
};