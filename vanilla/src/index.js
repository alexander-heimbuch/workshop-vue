const backend = 'http://localhost:3000';
const spinner = document.getElementById('spinner');
const cards = document.getElementById('cards');
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
const searchInput = document.getElementById('search-input');
const errorMessage = document.getElementById('error');

// Fetch data from the api
function getData({ limit = 50, q = '' } = {}) {
  const url = new URL(`${backend}/api`);

  url.searchParams.append('limit', limit);
  url.searchParams.append('q', q);

  return fetch(url)
    .then(res => res.json())
    .then(({ results }) => results)
    .then(results => results.map(result => Object.assign({}, result, { image: `${backend}/${result.image}` })))
}

function clear(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function setCardContent({ image, title, overview, rating, votes } = {}) {
  document.title = title;
  detailsTitle.textContent = title;
  detailsAbstract.textContent = overview;
  detailsRating.textContent = rating;
  detailsVotes.textContent = votes;
  detailsPoster.setAttribute('src', image);
}

function closeSearch() {
  search.classList.add('hidden');
  searchToggle.classList.remove('hidden');
  document.title = 'Movies';
}

function showSearch() {
  search.classList.remove('hidden');
  searchToggle.classList.add('hidden');
}

function closeDetail() {
  details.classList.add('hidden');
  searchToggle.classList.remove('hidden');
  document.title = 'Movies';
}

function showDetail() {
  details.classList.remove('hidden');
  searchToggle.classList.add('hidden');
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

  cardEl.addEventListener('click', () => {
    setCardContent(movie);
    showDetail();
  }, false);

  return cardEl;
}

function render({ q = '' } = {}) {
  clear(cards);
  errorMessage.classList.add('hidden');
  spinner.classList.remove('hidden');

  return getData({ q })
    .then(results => results
      .map(createCard)
      .map(el => cards.appendChild(el))
    )
    .then((results) => {
      spinner.classList.add('hidden');

      if (results.length > 0) {
        cards.classList.remove('hidden');
        searchToggle.classList.remove('hidden');
      } else {
        errorMessage.classList.remove('hidden');
      }
    });
}

// Search
searchInput.addEventListener('input', function () {
  searchQuery = this.value;
});

searchInput.addEventListener('keyup', function (event) {
  if (event.which === 13) {
    closeSearch();
    render({ q: this.value });
  }
});

// Event Bindings
searchToggle.addEventListener('click', () => {
  showSearch();
  document.title = 'Movies - Suchen';
}, false);

searchClose.addEventListener('click', closeSearch, false);

detailsClose.addEventListener('click', closeDetail, false)

// Global Key Bindings
document.addEventListener('keyup', (event) => {
  switch (event.which) {
    case 27: // ESC
      closeSearch();
      closeDetail();
      break;
  }
});

// Init
search.classList.add('hidden');
details.classList.add('hidden');
cards.classList.add('hidden');
searchToggle.classList.add('hidden');


render();
