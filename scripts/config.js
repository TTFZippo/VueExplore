const path = require('path');
const { urlToHttpOptions } = require('url');
const aliases = require('./alias.js')

const resolve = p => {
  const base = p.split('/')[0];
  if(aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    return path.resolve(__dirname, '../', p)
  }
}
const builds = {
  'web-full-dev': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    // banner
  },
  'web-runtime-dev': {
    entry: resolve('web/entry-runtime.js'),
    dest: resolve('dist/vue.runtime.js'),
    format: 'umd',
    env: 'development',
  },
}

function genConfig(name) {
  const opts = builds[name];
  const config = {
    input: opts.entry,
    // external: opts.external,
    output: {
      file: opts.dest,
      format: opts.format,
      // banner: opts.banner,
      name: opts.moduleName || 'Vue'
    }
  }
  return config;
}
exports.getAllBuilds = () => Object.keys(builds).map(genConfig);
