// 'use strict'

// const eleventyPackage = require('@11ty/eleventy/package.json')

// module.exports = function () {
//   return { generatorStr: `${eleventyPackage.name} v${eleventyPackage.version}` }
// }

const fs = require('fs');

module.exports = function () {
  const packageJson = JSON.parse(fs.readFileSync('./node_modules/@11ty/eleventy/package.json', 'utf8'));
  return { generatorStr: `${packageJson.name} v${packageJson.version}` }
}
