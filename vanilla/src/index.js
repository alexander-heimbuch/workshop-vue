const backend = 'http://localhost:3000';
const container = document.getElementById('cards');
const details = document.getElementById('details');
const detailsClose = document.getElementById('details-close');
const detailsTitle = document.getElementById('details-title');
const detailsRating = document.getElementById('details-rating');
const detailsVotes = document.getElementById('details-votes');
const detailsAbstract = document.getElementById('details-abstract');
const detailsPoster = document.getElementById('details-poster');
const search = document.getElementById('search');
const searchToggle = document.getElementById('search-toggle');
const searchClose = document.getElementById('search-close');

// Fetch data from the api
function getData({ limit = 50 } = {}) {
  const url = new URL(`${backend}/api`);

  url.searchParams.append('limit', limit);

  return fetch(url)
    .then(res => res.json())
    .then(({ results }) => results)
    .then(results => results.map(result => Object.assign({}, result, { image: `${backend}/${result.image}` })))
}

function showCard({ image, title, overview, rating, votes } = {}) {
  return () => {
    document.title = title;

    details.classList.toggle('hidden');
    detailsTitle.textContent = title;
    detailsAbstract.textContent = overview;
    detailsRating.textContent = rating;
    detailsVotes.textContent = votes;
    detailsPoster.setAttribute('src', image);
  }
}

// Component Creation
function createCard(movie) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');

  const titelEl = document.createElement('div');
  titelEl.classList.add('card__title');
  titelEl.textContent = movie.title;

  const imageEl = document.createElement('img');
  imageEl.classList.add('card__poster');
  imageEl.setAttribute('src', movie.image);

  cardEl.appendChild(titelEl);
  cardEl.appendChild(imageEl);

  cardEl.addEventListener('click', showCard(movie), false);

  return cardEl;
}

// User Interactions
searchToggle.addEventListener('click', () => {
  search.classList.toggle('hidden');
  searchToggle.classList.toggle('hidden');
  document.title = 'Movies - Suchen';
}, false);

searchClose.addEventListener('click', () => {
  search.classList.toggle('hidden');
  searchToggle.classList.toggle('hidden');
  document.title = 'Movies';
}, false);

detailsClose.addEventListener('click', () => {
  details.classList.toggle('hidden');
  searchToggle.classList.toggle('hidden');
  document.title = 'Movies';
}, false)

// Init
search.classList.add('hidden');
details.classList.add('hidden');

getData().then(results => results
  .map(createCard)
  .map(el => container.appendChild(el)));

/**
 * LEARNINGS:
 *
 * - Components: Creation, Updates, Split between Template Creation and Component Logic, Reusability
 * - State Management: Creating, Maintaining and Updating the Application State
 * - Managing Side Effects: Handling API Calls and User Interactions
 * -
 */
