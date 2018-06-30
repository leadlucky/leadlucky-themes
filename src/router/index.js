import themes from '../themes'
import Vue from 'vue';
import Router from 'vue-router';
import List from '../List'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'listing',
      component: List
    },
    ...Object.keys(themes).map(themeName => {
      return {
        path: `/${themeName}`,
        name: `${themeName}-demo`,
        component: themes[themeName].component,
        props: {themeName}
      }
    })
  ]
})
