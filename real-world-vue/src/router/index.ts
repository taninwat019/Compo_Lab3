import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventListView2 from '../views/EventListView2.vue'
import StudentListView from '../views/StudentListView.vue'
import EventDetailView from '../views/EventDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props : (route) => ({page: parseInt(route.query?.page as string || '1'),limit: parseInt(route.query?.limit as string || '2')})
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/event2',
      name: 'event-list2',
      component: EventListView2
    },
    {
      path: '/student',
      name: 'student',
      component: StudentListView
    },
    {
      path: '/event/id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    }
  ]
})

export default router
