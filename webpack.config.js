const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public');

// const common = {
//   context: SRC_DIR,
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             loader: 'css-loader'
//           }
//         ]
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             loader: 'css-loader'
//           },
//           {
//             loader: 'sass-loader'
//           }
//         ]
//       }
//     ]
//   },
// };

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test : /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test : /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

// const client = {
//   entry: './client.js',
//   output: {
//     path: DIST_DIR,
//     filename: 'app.js',
//   },
// };

// const server = {
//   entry: './server.js',
//   target: 'node',
//   output: {
//     path: DIST_DIR,
//     filename: 'app-server.js',
//     libraryTarget: 'commonjs-module'
//   }
// };

// module.exports = [
//   Object.assign({}, common, client),
//   Object.assign({}, common, server),
// ];
