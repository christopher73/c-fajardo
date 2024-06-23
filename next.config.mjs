/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**", port: "", pathname: "**" },
    ],
    // domains: [
    //   "media0.giphy.com",
    //   "media1.giphy.com",
    //   "media2.giphy.com",
    //   "media3.giphy.com",
    //   "media4.giphy.com",
    //   "media5.giphy.com",
    //   "media6.giphy.com",
    // ],
  },
};

export default nextConfig;
