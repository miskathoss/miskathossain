/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["gsap", "lenis"],
  async headers() {
    return [
      {
        source: "/assets/frames/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/images/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/INVESTMENT",
        destination: "/investment",
        permanent: true,
      },
      {
        source: "/Investment",
        destination: "/investment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
