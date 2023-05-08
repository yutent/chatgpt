import { resolve } from 'path'

export default {
  // 部署目录调整为二级目录
  base: '/chatgpt/',
  devServer: {
    port: 8080,
    domain: '',
    https: false,
    ssl: {
      key: '',
      cert: ''
      // ca: ''
    }
  },
  pages: {
    // 如果多页应用, 则这里写传入多个值即可(注意不是数组格式)
    // 这里的key值, 将是最终的页面的名称
    index: {
      // 这里的resolve可将相对路径转为绝对路径
      // 如果传入的路径已经是绝对路径的, 可不需要resolve
      entry: resolve('./src/main.js'),
      title: 'chatgpt网页客户端'
    }
  },
  // 以下cdn地址, 可自行修改为适合的
  // 有用到其他的库, 可以手动添加,
  // 也可以在页面中直接引入完整的路径, 而不必须在这里声明
  imports: {
    vue: '//jscdn.ink/vue/3.2.47/vue.runtime.esm-browser.prod.js',
    '@bd/core.js': '//jscdn.ink/@bd/core/latest/index.js',
    fetch: '//jscdn.ink/@bytedo/fetch/latest/next.js'
  }
}
