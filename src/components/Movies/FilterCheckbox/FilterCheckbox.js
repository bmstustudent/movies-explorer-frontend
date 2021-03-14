import React from 'react';
import './FilterCheckbox.css';

// фильтр с чекбоксом «Только короткометражки»
function FilterCheckbox({ shortMovie, handleShortMovieChange }) {
  const handleCheckboxClick = () => {
    handleShortMovieChange();
  };
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__container' htmlFor='checkbox'>
        <input className='filter-checkbox_invisible' type="checkbox" onChange={handleCheckboxClick} checked={shortMovie} id='checkbox' value='Короткометражки'></input>
        <span className="filter-checkbox_visible"></span>
        <span className='filter-checkbox_text'>Короткометражки</span>
      </label>
    </div>
  )
}

export default FilterCheckbox;
