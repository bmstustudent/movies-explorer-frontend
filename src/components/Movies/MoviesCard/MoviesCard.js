import { Switch, Route } from 'react-router-dom';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import * as helpers from '../../../../utils/helpers';
import { movieDuration } from '../../../../utils/helpers';

// компонент одной карточки фильма
function MoviesCard({ card, onClickCardButton }) {
  const location = useLocation();
  const isSavedMoviesList = location.pathname === '/saved-movies';

  function handleClickButton() {
    onClickCardButton(card);
  }
  return (
    <div className='movies-card'>
      <a
        className="movies-card__link"
        href={helpers.getTrailerHref(card)}
        target="_blank"
        rel="noreferrer"
      >
        <img className='movies-card__image'
          src={helpers.getCardImage(card)}
          alt='Постер фильма'></img>
      </a>
      <div className='movies-card__container'>
        <h2 className='movies-card__container_title'>{card.nameRU}</h2>
        <Switch>
          <Route path='/saved-movies'>
            <button className='movies-card__container_remove'></button>
          </Route>
          <Route path='/movies'>
            <button className='movies-card__container_like'></button>
          </Route>
        </Switch>
        <p className='movies-card__duration'>{`${card.duration} ${movieDuration(card.duration)}`}</p>
      </div>

    </div>
  )
}

export default MoviesCard;


// Доделать кнопки, пока не знаю как