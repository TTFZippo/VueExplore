const rollup = require('rollup')
const fs = require('fs');
const { report } = require('process');
let builds = require('./config').getAllBuilds()

// console.log(builds);
// 迭代构建
function build(builds) {
  let built = 0;
  const total = builds.length;
  const next = () => {
    buildEntry(builds[built])
    .then(() => {
      built++;
      if(built < total) {
        next()
      }
    })
    .catch(logError)
  }
  next()
}

build(builds);

function buildEntry(config) {
  // console.log('buildEntry');
  const output = config.output;
  const { file, banner } = output;
  return rollup.rollup(config)
    .then(bundle => bundle.generate(output))
    .then(({output: [{code}]})=> {
      return write(file, code)
    })
}

function logError(e) {
  console.log(e);
}

// 写入文件
function write(dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report() {
      resolve();
    }
    fs.writeFile(dest, code, err => {
      if(err) return reject(err)
      report()
    })
  })
}