import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddPerson from "../views/AddPerson.vue"
import EditPeron from "../views/EditPeron.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: "AddPerson",
    component: AddPerson
  },
  {
    path: "/persons/:id",
    name: "EditPeron",
    component: EditPeron,
    params: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
