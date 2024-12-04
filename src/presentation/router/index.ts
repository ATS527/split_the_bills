import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/presentation/views/HomeView.vue'
import IncomeView from '@/presentation/views/IncomeView.vue'
import ExpenseView from '@/presentation/views/ExpenseView.vue'

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
