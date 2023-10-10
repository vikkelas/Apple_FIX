/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    env: {
        APP_URL_BACKEND: process.env.APP_URL_BACKEND,
        DEV_TOOLS_REDUX: process.env.DEV_TOOLS_REDUX
    },
}

module.exports = nextConfig
