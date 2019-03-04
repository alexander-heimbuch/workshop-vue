# Workshop Movies API

## Installation

Simply run `npm install`

## Usage

Start the server with `npm start`, it will listen on [http://localhost:3000](http://localhost:3000).

## Endpoints

### /api

parameter | name    | default         | usage |
--------- | ------- | --------------- | ------------------------------- |
query     | `q`     | `''`            | fuzzy search on title           |
start     | `start` | `1`             | result element list start       |
end       | `end`   | `null`          | result element list end         |
limit     | `limit` | `movies length` | limiter for result set          |
sort      | `sort`  | `null`          | attribute to sort the list by   |
order     | `order` | `DESC`          | order of sorting (ASC or DESC)  |

> info: all parameters are optional

Example: `http://localhost:3000/api?q=toy&limit=1`

```javascript
{
    "hits": 1,
    "total": 249,
    "params": {
        "q": "toy",
        "limit": 1,
        "start": 1,
        "end": null,
        "sort": "runtime",
        "order": "DESC"
    },
    "results": [
        {
            "rank": 68,
            "id": "tt0114709",
            "genres": [
                "Adventure",
                "Animation",
                "Comedy"
            ],
            "type": "movie",
            "votes": 776278,
            "rating": 8.3,
            "title": "Toy Story",
            "overview": "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
            "runtime": 81,
            "image": "images/tt0114709.jpg"
        }
    ]
}
```

Example: `http://localhost:3000/api?sort=runtime&order=ASC&limit=1`

```javascript
{
    "hits": 1,
    "total": 249,
    "params": {
        "q": "",
        "limit": 1,
        "start": 1,
        "end": null,
        "sort": "runtime",
        "order": "ASC"
    },
    "results": [
        {
            "rank": 6,
            "id": "tt0071562",
            "genres": [
                "Crime",
                "Drama"
            ],
            "type": "movie",
            "votes": 979236,
            "rating": 9,
            "title": "The Godfather: Part II",
            "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "runtime": 202,
            "image": "images/tt0071562.jpg"
        }
    ]
}
```

### /images

Serves images from the `images/` path.

Example: `http://localhost:3000/images/tt0114709.jpg`

Example: `http://localhost:3000/images/tt0071562.jpg`
