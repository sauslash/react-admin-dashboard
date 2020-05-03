"use strict";

const gulp = require("gulp");
const build = require("@microsoft/sp-build-web");
const path = require('path');

build.addSuppression(
  `Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`
);


// build.configureWebpack.mergeConfig({
//   additionalConfiguration: generatedConfiguration => {

//     generatedConfiguration.module.rules.push({
//       test: /\.(js|jsx)$/,
//       include: path.resolve(__dirname, 'src'),
//       exclude: /(node_modules|bower_components|build)/,
//       use: ['babel-loader'],
//       resolve: {
//         extensions: ['*', '.js', '.jsx']
//       },
//     });    

//     return generatedConfiguration;
//   }
// });

// build.configureWebpack.mergeConfig({
//   additionalConfiguration: generatedConfiguration => {

//     generatedConfiguration.module.rules.push({
//       test: /\.js$/,
//       loader:'babel-loader',
//       exclude: '/node_modules/',
//       query: {
//         presets: ["es2015", "react"]
//       }     
//     });    

//     generatedConfiguration.module.rules.push({
//       test: /\.jsx$/,
//       loader:'babel-loader',
//       exclude: '/node_modules/',
//       query: {
//         presets: ["es2015", "react"]
//       }
//     });  

//     return generatedConfiguration;
//   }
// });

build.configureWebpack.mergeConfig({
  additionalConfiguration: generatedConfiguration => {

    generatedConfiguration.module.rules.push({
      test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: {
        loader: "url-loader", query: { limit: 10000, mimetype: 'application/font-woff2' }
      },
    });    

    return generatedConfiguration;
  }
});


// build.configureWebpack.mergeConfig({
//   additionalConfiguration: generatedConfiguration => {

//     generatedConfiguration.module.rules.map(rule => {
      
//       if (rule.use.indexOf("source-map-loader") != -1) {        
//         rule.exclude = path.resolve(__dirname, "node_modules");
//       }
//     }); 

//     return generatedConfiguration;
//   }
// });


build.initialize(gulp);
