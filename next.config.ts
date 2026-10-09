import type { NextConfig } from "next";

const blogApiUrl = process.env.NEXT_PUBLIC_BLOG_API_URL || "http://localhost:3000";
const blogApiOrigin = new URL(blogApiUrl).origin;
const blogApiHostname = new URL(blogApiUrl).hostname;
const blogApiPort = new URL(blogApiUrl).port;
const blogApiProtocol = new URL(blogApiUrl).protocol.replace(':', '') as 'http' | 'https';

const nextConfig: NextConfig = {
  transpilePackages: ['@react-pdf/renderer'],
  images: {
    remotePatterns: [
      {
        protocol: blogApiProtocol,
        hostname: blogApiHostname,
        port: blogApiPort,
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
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
