/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LOCAL_API_URL: process.env.LOCAL_API_URL,
    DEPLOY_API_URL: process.env.DEPLOY_API_URL,
  },
};

module.exports = nextConfig;
