import type { NextConfig } from "next";

const blogApiUrl = process.env.NEXT_PUBLIC_BLOG_API_URL || "http://localhost:3000";
const blogApiOrigin = new URL(blogApiUrl).origin;
const blogApiHostname = new URL(blogApiUrl).hostname;
const blogApiPort = new URL(blogApiUrl).port;

const nextConfig: NextConfig = {
  transpilePackages: ['@react-pdf/renderer'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: blogApiHostname,
        port: blogApiPort,
        pathname: '/uploads/**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    return config;
  },
};

export default nextConfig;
