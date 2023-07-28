/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "next-app";

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
    trailingSlash: true,
    output: 'export',
}

module.exports = nextConfig
