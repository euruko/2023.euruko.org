const path = require("path");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");

let config = require("./config/webpack.defaults.js");

// Add any overrides to the default webpack config here:
//
// Eg:
//
//  ```
//    const path = require("path")
//    config.resolve.modules.push(path.resolve(__dirname, 'frontend', 'components'))
//    config.resolve.alias.frontendComponents = path.resolve(__dirname, 'frontend', 'components')
//  ```
//
// You can also merge in a custom config using the included `webpack-merge` package.
// Complete docs available at: https://github.com/survivejs/webpack-merge
//
// Eg:
//
//  ```
//    const customConfig = { ..... }
//    config = merge(config, customConfig)
//  ```

const customConfig = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "frontend/**/*.{png,svg,jpg,jpeg,gif,json,geojson}"),
          to({ context, absoluteFilename }) {
            return `${path.relative(
              `${context}/frontend/javascript`,
              path.dirname(absoluteFilename)
            )}/[name].[contenthash][ext]`;
          },
        },
      ],
    }),
  ],
};

config = merge(config, customConfig);

////////////////////////////////////////////////////////

module.exports = config;
