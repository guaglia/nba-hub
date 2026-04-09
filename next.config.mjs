/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/experiences/nba",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.nba.com",
      },
    ],
  },
};

export default nextConfig;
