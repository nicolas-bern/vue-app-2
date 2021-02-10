import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Album from "@/views/Album";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/album/:id',
    name: "Album",
    component: Album
  }
]

const router = new VueRouter({
  routes
})

export default router
