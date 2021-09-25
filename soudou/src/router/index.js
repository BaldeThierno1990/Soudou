import { createRouter, createWebHistory } from 'vue-router'
import Liste from '../components/Liste.vue'
import Add from '../components/Add.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'
import Update from '../components/Update.vue'
import LoginF from '../components/LoginF.vue'
import View from '../components/View.vue'


const routes = [
  {
    path: '/',
    name: 'Liste',
    component: Liste
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
 {
   path: '/login',
   name: 'Login',
   component: Login
 },
 {
   path: '/registration',
   name: 'Registration',
   component: Registration

 },
 {
  path:'/loginF',
  name:'LoginF',
  component:LoginF
},
{
  path: '/view',
  name: 'View',
  component:View

},
 {
   path: '/update/:id',
   name: 'Update',
   component: Update

 },
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
