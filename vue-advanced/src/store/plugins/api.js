const backend = 'http://localhost:3000';

const url = ({ limit = 50, q = '' } = {}) => {
  const endpoint = new URL(`${backend}/api`);

  endpoint.searchParams.append('limit', limit);
  endpoint.searchParams.append('q', q);

  return endpoint
}

const request = ({ limit = 50, q = '' } = {}) => fetch(url({ limit, q }))
  .then(res => res.json())
  .then(({ results }) => results)
  .then(results => results.map(result => Object.assign({}, result, { image: `${backend}/${result.image}` })));


export default store => {
  store.subscribe((mutation) => {
    if (mutation.type === 'requestData') {
      request({ q: mutation.payload })
        .then((movies = []) => store.dispatch('resolveData', movies))
        .catch(() => store.dispatch('resolveData', []))
    }
  })
}


