import { MAIN_URL, MOVIES_URL, checkResponse } from './utils';

export async function register(name, email, password) {
  const res = await fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  return checkResponse(res);
}

export async function authorize(email, password) {
  const res = await fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return checkResponse(res);
}

export async function checkToken(jwt) {
  const res = await fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
  });
  return checkResponse(res);
}

export async function getUserInfo() {
  const res = await fetch(`${MAIN_URL}/users/me`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
  return checkResponse(res);
}

export async function setUserInfo(data) {
  const res = await fetch(`${MAIN_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  });
  return checkResponse(res);
}

export async function saveMovie(movie) {
  const {
    country,
    director,
    duration,
    year,
    description,
    nameRU,
    nameEN,
  } = movie;
  const res = await fetch(`${MAIN_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image: `${MOVIES_URL}${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
      nameRU,
      nameEN,
      movieId: movie.id,
    })
  });
  return checkResponse(res);
}

export async function deleteMovie(id) {
  const res = await fetch(`${MAIN_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
  return checkResponse(res);
}

export async function getSavedMovies() {
  const res = await fetch(`${MAIN_URL}/movies`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
  return checkResponse(res);
}
