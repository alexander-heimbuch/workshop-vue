const backend = 'http://localhost:3000';

const url = ({ limit = 50, q = '' } = {}) => {
  const endpoint = new URL(`${backend}/api`);

  endpoint.searchParams.append('limit', limit);
  endpoint.searchParams.append('q', q);

  return endpoint
}

export default {
  get ({ limit = 50, q = '' } = {}) {
    return fetch(url({ limit, q }))
      .then(res => res.json())
      .then(({ results }) => results)
      .then(results => results.map(result => Object.assign({}, result, { image: `${backend}/${result.image}` })))
  }
}
