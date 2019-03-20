import Vue from 'vue'
import VueRouter from 'vue-router';
import Search from './screens/Search';
import Details from './screens/Details';

Vue.use(VueRouter);

const routes = [{
  path: '/search', component: Search, props: true,
  name: 'search'
}, {
  path: '/search/:query', component: Search, props: true,
  name: 'search'
}, {
  path: '/details/:id', component: Details, props: true,
  name: 'details'
}, {
  path: '/:query',
  name: 'results'
}, {
  path: '/',
  name: 'results'
}];

export default new VueRouter({
  routes
});
