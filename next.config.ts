import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;


