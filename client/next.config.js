/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    env: {
        APP_URL_BACKEND: process.env.APP_URL_BACKEND,
        DEV_TOOLS_REDUX: process.env.DEV_TOOLS_REDUX
    },
    images: {
        dangerouslyAllowSVG: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
