import ExpenseView from '@/views/ExpenseView.vue'
import HomeView from '@/views/HomeView.vue'
import IncomeView from '@/views/IncomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/income',
      name: 'income',
      component: IncomeView,
    },
    {
      path: '/expense',
      name: 'expense',
      component: ExpenseView,
    },
  ],
})

export default router
