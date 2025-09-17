import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tomorrowView from '../views/tomorrowView.vue'
import MapView from '../views/MapView.vue'
import comView from '../views/comView.vue'

import HokkaidoReviews from '../views/HokkaidoReviews.vue'
import TohokuReviews from '../views/TohokuReviews.vue'
import KantoReviews from '../views/KantoReviews.vue'
import ChubuReviews from '../views/ChubuReviews.vue'
import KinkiReviews from '../views/KinkiReviews.vue'
import ChugokuShikokuReviews from '../views/ChugokuShikokuReviews.vue'
import KyushuOkinawaReviews from '../views/KyushuOkinawaReviews.vue'
import OverseasReviews from '../views/OverseasReviews.vue'
import TokyoRoute from '../views/TokyoRoute.vue'

import KyotoRoute from '@/views/KyotoRoute.vue'
import HokaidouRoute from '@/views/HokaidouRoute.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/tomorrowView', name: 'tomorrowView', component: tomorrowView },
  { path: '/MapView', name: 'MapView', component: MapView },

 
  { path: '/commentView', name: 'HokkaidoReviews', component: HokkaidoReviews },

  { path: '/comView', name: 'comView', component: comView },
  { path: '/reviews/hokkaido', name: 'HokkaidoReviewsPage', component: HokkaidoReviews },
  { path: '/reviews/tohoku', name: 'TohokuReviews', component: TohokuReviews },
  { path: '/reviews/kanto', name: 'KantoReviews', component: KantoReviews },
  { path: '/reviews/chubu', name: 'ChubuReviews', component: ChubuReviews },
  { path: '/reviews/kinki', name: 'KinkiReviews', component: KinkiReviews },
  { path: '/reviews/chugoku-shikoku', name: 'ChugokuShikokuReviews', component: ChugokuShikokuReviews },
  { path: '/reviews/kyushu-okinawa', name: 'KyushuOkinawaReviews', component: KyushuOkinawaReviews },
  { path: '/reviews/overseas', name: 'OverseasReviews', component: OverseasReviews },
  { path: '/routes/tokyo', name: 'TokyoRoute', component: TokyoRoute },
  { path: '/routes/kyoto', name: 'KyotoRoute', component: KyotoRoute },
  { path: '/routes/hokkaido', name: 'HokkaidouRoute', component: HokaidouRoute },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
