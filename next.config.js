/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LOCAL_API_URL: process.env.LOCAL_API_URL,
    DEPLOY_API_URL: process.env.DEPLOY_API_URL,
    LOCAL_URL: process.env.LOCAL_URL,
    DEPLOY_URL: process.env.DEPLOY_URL,
  },
};

module.exports = nextConfig;
