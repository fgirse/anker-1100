import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: { root: process.cwd() } as unknown as NextConfig['experimental'],
};

export default nextConfig;
