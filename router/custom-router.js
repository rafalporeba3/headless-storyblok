const path = require('path')
import { POSTS_PAGE } from '../configs/routes'

module.exports = function () {
  this.nuxt.options.build.createRoutes = () => {
    return [
      {
        path: '/',
        name: POSTS_PAGE,
        component: path.resolve(__dirname, '../pages/Default.vue'),
        chunkName: 'pages/posts',
      },
    ]
  }
}
