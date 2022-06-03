import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Terminal from '@/views/Terminal.vue';
import Mobile from '@/views/Mobile.vue';
import Flights from '@/views/Flights.vue';
import Booking from '@/views/Booking.vue';
import Token from '@/views/Token.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', name: 'terminal', component: Terminal },
  { path: '/mobile', name: 'mobile', component: Mobile },
  { path: '/flights', name: 'flights', component: Flights },
  { path: '/booking', name: 'booking', component: Booking },
  { path: '/token', name: 'token', component: Token }
  
];

const router = new VueRouter({
  routes
});

export default router;
