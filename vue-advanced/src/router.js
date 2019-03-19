import VueRouter from 'vue-router';
import Search from './screens/Search';
import Details from './screens/Details';

const routes = [{
  path: '/search', component: Search, props: true
}, {
  path: '/search/:query', component: Search, props: true
}, {
  path: '/details', component: Details,  props: (route) => ({
    image: route.query.image,
    title: route.query.title,
    overview: route.query.overview,
    rating: route.query.rating,
    votes: route.query.votes,
  })
}, {
  path: '/:query'
}];

export default new VueRouter({
  routes
});
