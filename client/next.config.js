/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    env: {
        APP_URL_BACKEND: process.env.APP_URL_BACKEND,
        DEV_TOOLS_REDUX: process.env.DEV_TOOLS_REDUX,
        BOT_API_TOKEN: process.env.BOT_API_TOKEN,
        REQUEST_MESSAGE_CHAT_ID: process.env.REQUEST_MESSAGE_CHAT_ID
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
