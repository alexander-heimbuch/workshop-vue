import VueRouter from 'vue-router';
import Search from './screens/Search';

const routes = [{
  path: '/search', component: Search, props: true
}, {
  path: '/:query'
}, {
  path: '/search/:query', component: Search, props: true
}];

export default new VueRouter({
  routes
});
