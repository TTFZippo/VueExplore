const path = require('path')

const resolve = p => path.resolve(__dirname, '../', p)

module.exports = {
  web: resolve('src/platforms/web'),
}

// console.log(resolve('src/platforms/web')) // myVue（项目）根目录下的路径
// console.log(__dirname); // 当前绝对路径