const serve = require('serve-handler');
const { send } = require('micro');
const { router, get } = require('microrouter');
const query = require('micro-query');
const microCors = require('micro-cors');

const movies = require('./movies');
const cors = microCors({ allowMethods: ['GET'] })

const sorter = (sort, order) => (a, b) => {
  if (!sort) {
    return 0;
  }

  if (typeof a[sort] === undefined) {
    return 0;
  }

  if (typeof b[sort] === undefined) {
    return 0;
  }

  if(a[sort] > b[sort]) {
    return order === 'DESC' ? 1 : -1;
  }

  if(a[sort] < b[sort]) {
    return order === 'DESC' ? -1 : 1;
  }

  return 0;
}

const api = cors((req) => {
  const {
    q = '',
    limit = movies.length - 1,
    start = 1,
    end = null,
    sort = 'rank',
    order = 'DESC'
  } = query(req);

  const params = {
    q: q.toLowerCase(),
    limit: parseInt(limit),
    start: parseInt(start),
    end: parseInt(end),
    sort,
    order
  };

  const results = movies
    .filter(({ title }) => title.toLowerCase().includes(params.q)) // search
    .sort(sorter(params.sort, params.order)) // sort
    .slice(params.start - 1, params.end || params.limit); // limiter

  return {
    hits: results.length,
    total: movies.length,
    params,
    results
  }
});

const image = async (req, res) => await serve(req, res, {
  cleanUrls: true
});

const notfound = (_, res) => send(res, 404, { err: 'not found' });

module.exports = router(get('/api*', api), get('/images*', image), get('/*', notfound));
