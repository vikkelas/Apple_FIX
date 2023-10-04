/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    env: {
        APP_URL_BACKEND: process.env.APP_URL_BACKEND,
    },
}

module.exports = nextConfig
