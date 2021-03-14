import notFoundImage from '../src/images/404.jpg'
export const apiMovieBaseUrl = "https://api.nomoreparties.co/beatfilm-movies";
export const apiBaseUrl = "https://api.movies-project.students.nomoredomains.work";

export const apiHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const apiCredentials = "include";

export const movieCardConfig = () => {
    if (window.innerWidth >= 1080) return 12;
    if (window.innerWidth >= 680) return 8;
    return 5;
};

export const addMovieCardConfig = () => {
    if (window.innerWidth >= 1080) return 3;
    return 2;
};

export const movieDuration = (duration) => {
    const tens = Math.abs(duration) % 100;
    const units = tens % 10;
    if (tens > 10 && tens < 20) return 'минут';
    if (units > 1 && units < 5) return 'минуты';
    if (units === 1) return 'минута';
    return 'минут';
};

export const getTrailerHref = (card) => {
    if (card.trailerLink) return card.trailerLink;
    if (card.trailer) return card.trailer;
    return 'https://www.youtube.com/';
};

export const getCardImage = (card) => {
    if (card.image && card.image.url) return `https://api.nomoreparties.co${card.image.url}`;
    if (card.image) return card.image;
    return notFoundImage;
};
