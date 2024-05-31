const path = require("path");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack: (config, { isServer }) => {
    // Add raw-loader to handle XML files
    config.module.rules.push({
      test: /\.xml$/,
      use: ["raw-loader"],
    });

    return config;
  },
  // output: "export",
};

module.exports = nextConfig;
