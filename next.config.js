/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Only use file-loader for client-side bundle
      if (!isServer) {
        config.module.rules.push({
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/_next',
                name: 'static/media/[name].[hash].[ext]',
              },
            },
          ],
        });
      }
  
      return config;
    },
  };
  
