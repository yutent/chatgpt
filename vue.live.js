import { resolve } from 'path'

export default {
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
      title: 'vue-live 应用示例'
    }
  },
  // 以下cdn地址, 可自行修改为适合的
  // 有用到其他的库, 可以手动添加,
  // 也可以在页面中直接引入完整的路径, 而不必须在这里声明
  imports: {
    vue: '//jscdn.ink/vue/3.2.47/vue.runtime.esm-browser.prod.js',
    // 这个vue-router库, 移除了 @vue/devtools-api 相关的代码。 以达到减少不必须的体积的效果
    // 如需要支持devtools的, 请修改为原版vue-router地址即可。
    // 'vue-router': '//jscdn.ink/@bytedo/vue-router/4.1.6/vue-router.js',
    // 'vue-router': '//jscdn.ink/vue-router/4.1.6/vue-router.esm-browser.js',
    // '@vue/devtools-api': '//jscdn.ink/@vue/devtools-api/6.5.0/esm/index.js',
    fetch: '//jscdn.ink/@bytedo/fetch/2.1.5/next.js'
  }
}
