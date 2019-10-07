import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/login/'
import home from '../views/home/'
import tabbar from '../views/tabbar-layout/'

Vue.use(Router)
 
 export default new Router({
    
     routes: [
        
       {path: '/login', component: login},
       
       {path: '', component: tabbar, name: 'tabbar', 
        children: [
           {path: '/home', component: home, name: 'home'},
           {path: '', redirect: '/home'} 
        ]
       }
     ]
 })


