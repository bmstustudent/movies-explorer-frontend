import { getToken } from "./token";
import { BASE_URL } from '../auth';

class MainApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getHeaders() {
    const token = getToken();

    return {
      ...this.headers,
      'Authorization': `Bearer ${token}`
    }
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.getHeaders(),
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  getMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: this.getHeaders(),
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  createMovies(newMovies) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        keyword: newMovies.keyword,
        title: newMovies.title,
        text: newMovies.text,
        date: newMovies.date,
        source: newMovies.source,
        link: newMovies.link,
        image: newMovies.image
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  deleteMovies(moviesId) {
    return fetch(`${this.baseUrl}/movies/${moviesId}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

export default mainApi;
