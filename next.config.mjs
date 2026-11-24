/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["gsap", "lenis"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      // static demo portfolio living in public/demodesign/
      { source: "/demodesign", destination: "/demodesign/index.html" },
    ];
  },
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
};

export default nextConfig;
