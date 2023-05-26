'use strict'

const eleventyPackage = require('@11ty/eleventy/package.json')

module.exports = function () {
  return { generatorStr: `${eleventyPackage.name} v${eleventyPackage.version}` }
}