import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstPage from '../components/FirstPage.vue'
import Essay from '../components/Essay.vue'
import Classification from '../components/Classification.vue'
import MessageBoard from '../components/MessageBoard.vue'
import GuiDang from '../components/GuiDang.vue'
import About from '../components/About.vue'
import Article from '../components/Article.vue'
import Class from '../components/Class.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/首页' },
  { path: '/Home', component: Home, children: [
      {path: '/首页', component: FirstPage},
      {path: '/随笔', component: Essay},
      {path: '/分类', component: Classification},
      {path: '/留言板', component: MessageBoard},
      {path: '/归档', component: GuiDang},
      {path: '/关于', component: About},
      {path: '/文档/:class', component: Class},
      {path: '/文档/:class/:article', component: Article},
    ]}
]

const router = new VueRouter({
  routes
})

export default router
