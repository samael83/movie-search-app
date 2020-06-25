# OMDB API App

A simple React client that implements the OMDB API. More features are coming.   
[Demo](http://reactomdb.surge.sh/)

## Requirements

Create a movie search application that allows users to search by movie title (optionally by year as well).   
Pay attention to your application's UI / UX.

1. Use OMDB API with the api key: 157f34ed
2. Use "By Seach" API parameter
3. Deploy to public Github repo

---

## User Stories

1. User can search for title using a text input field
2. User can select title type from a dropdown [movie, series, episode]
3. User can select title release year (dropdown | number?)
4. On submit, user can see a list of the results for his / hers input
5. User can see the poster, title, release year for each title

---

## Features

### Must Have

- Search for title using params: [search query, year?, type]
- View search results

### Should have

- Resize  movie poster images from api response so that card items are even
- Pagination (lazy loading)
- Default poster image if none from api

### Nice to Have

- Autocomplete user search (load movie titles on app load from JSON to be used as cache)
- Trailers
- Reviews
- Additional data (presenting separate view on title click with full description and more info) 

---

## Open Issues

- short search queries (i.e. two chars) return "too many results" - user can't search for series like "ER".