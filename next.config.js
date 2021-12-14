module.exports = {
  reactStrictMode: true,

  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
      ignoreDuringBuilds: true,
    })
    return config;
  },
}
