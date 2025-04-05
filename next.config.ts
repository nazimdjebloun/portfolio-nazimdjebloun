import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

// export default nextConfig;

// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// module.exports = {
//   plugins: [new BundleAnalyzerPlugin()],
// };

// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config: any, { isServer }: any) => {
//     // Only run bundle analyzer in development and client-side
//     // if (process.env.ANALYZE === "true" && !isServer) {}
//     config.plugins.push(
//       new BundleAnalyzerPlugin({
//         analyzerMode: "server",
//         analyzerPort: 8888,
//         openAnalyzer: true,
//       })
//     );

//     return config;
//   },
//   // Add other Next.js config options here
// };

// module.exports = nextConfig;
