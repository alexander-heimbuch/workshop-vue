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
  path: '/details', component: Details,  props: (route) => ({
    image: route.query.image,
    title: route.query.title,
    overview: route.query.overview,
    rating: route.query.rating,
    votes: route.query.votes,
  }),
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
