import { MOVIES_URL, checkResponse } from './utils';

export async function getMovies() {
  const res = await fetch(`${MOVIES_URL}/beatfilm-movies`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return checkResponse(res);
}
