import './MoviesCardList.css';
import Preloader from '../../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
function MoviesCardList(
  cards,
  messageNoMovies,
  isVisiblePreloader,
  isVisibleButtonMore,
  onClickMoreButton,
  onClickCardButton
) {
  const isVisibleMessage = !cards.length;
  const isVisibleCards = !!cards.length;
  return (
    <div className='cards'>
      {
        isVisibleMessage &&
        <p className="cards__message">{messageNoMovies}</p>
      }
      {
        isVisibleCards &&
        <ul className="cards__list">
          {cards.map((card) => (
            <MoviesCard
              key={card._id}
              card={card}
              onClickCardButton={onClickCardButton}
            />
          ))}
        </ul>
      }
      {
        isVisibleButtonMore &&
        <button
          className="cards__button"
          type="button"
          name="more"
          onClick={onClickMoreButton}
        >
          Ещё
        </button>
      }
      <Preloader isVisiblePreloader={isVisiblePreloader} />
    </div>
  )
}

export default MoviesCardList;
