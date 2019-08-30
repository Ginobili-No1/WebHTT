import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import join from '@/components/join'
import culture from '@/components/culture'
import news from '@/components/news'
import newsParticular from '@/components/newsParticular'
import contact from '@/components/contact'
import lampblackMachine from '@/components/lampblackMachine'
import lampblackMachineParticular from '@/components/lampblackMachineParticular'
import heater from '@/components/heater'
import heaterParticular from '@/components/heaterParticular'
import cooker from '@/components/cooker'
import cookerParticular from '@/components/cookerParticular'
import product from '@/components/product'
import productParticular from '@/components/productParticular'
import cultureAlter from '@/components/cultureAlter'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/join',
      name: 'join',
      component: join
    },
    {
      path: '/cultureAlter',
      name: 'cultureAlter',
      component: cultureAlter
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/newsParticular/:id',
      name: 'newsParticular',
      component: newsParticular
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/lampblackMachineParticular/:id',
      name: 'lampblackMachineParticular',
      component: lampblackMachineParticular
    },
    {
      path: '/lampblackMachine',
      name: 'lampblackMachine',
      component: lampblackMachine
    },
    {
      path: '/heater',
      name: 'heater',
      component: heater
    },
    {
      path: '/heaterParticular/:id',
      name: 'heaterParticular',
      component: heaterParticular
    },
    {
      path: '/cooker',
      name: 'cooker',
      component: cooker
    },
    {
      path: '/cookerParticular/:id',
      name: 'cookerParticular',
      component: cookerParticular
    },
    {
      path: '/product/:type',
      name: 'product',
      component: product
    },
    {
      path: '/product/:type/:id',
      name: 'productParticular',
      component: productParticular
    },
    
  ]
})
