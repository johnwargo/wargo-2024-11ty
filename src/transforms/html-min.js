// https://learneleventyfromscratch.com/lesson/31.html#minifying-html-output
import htmlmin from 'html-minifier';

export default function (value, outputPath) {
  if (outputPath && outputPath.indexOf('.html') > -1) {
    return htmlmin.minify(value, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true
    });
  }

  return value;
};