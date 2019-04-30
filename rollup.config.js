import sass from 'rollup-plugin-sass';
import uglify from 'rollup-plugin-uglify';
import merge from 'deepmerge';

const dev = {
  input: 'src/index.js',
  output: {
    name: 'Gantt',
    file: 'dist/codelitt-gantt2.js',
    format: 'iife'
  },
  plugins: [
    sass({
      output: 'dist/codelitt-gantt2.css'
    })
  ]
};
const prod = merge(dev, {
  output: {
    file: 'dist/codelitt-gantt2.min.js'
  },
  plugins: [uglify()]
});

export default [dev, prod];
