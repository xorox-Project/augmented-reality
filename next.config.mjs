/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.output.publicPath = '/_next/';
      }
      return config;
    },
  };
  
  export default nextConfig;
  