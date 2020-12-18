import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Edit from './views/Company/Edit/Edit.vue';
import CompanyDetails from './views/Company/CompanyDetails/CompanyDetails.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
      props: true,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: CompanyDetails,
      props: true,
    },
  ],
});
