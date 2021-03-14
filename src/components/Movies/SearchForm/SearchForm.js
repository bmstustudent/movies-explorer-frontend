import React from 'react';
import { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../../images/search-icon.svg';
import { NEED_ENTER_KEYWORD } from '../../utils/constants';

// форма поиска, куда пользователь будет вводить запрос
function SearchForm(
  onSearchSubmit,
  isDisabledSearch,
  isCheckboxChecked,
  onCheckboxChange
) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const valueTrim = value.trim();
    setValue(valueTrim);
    if (!valueTrim) {
      setError(NEED_ENTER_KEYWORD);
    } else {
      setError('');
      onSearchSubmit(valueTrim);
    }
  }

  return (
    <div className='searchForm'>
      <div className='searchForm__container' name='search' onSubmit={handleSubmit}>
        <img className='searchForm__container_image' src={searchIcon} alt='Лупа'></img>
        <input
          className='searchForm__container_input'
          type='text'
          name='movie'
          value={value}
          onChange={handleChange}
          disabled={isDisabledSearch}
          placeholder='Фильм'
          required pattern='[A-Za-zА-Яа-яЁё0-9 -]{1,40}'
        >
        </input>
        <button
          className='searchForm__container_btn'
          type='submit'
          disabled={isDisabledSearch}
        >Найти</button>
      </div>
      <hr className='searchForm__container_underline'></hr>
      <span className='searchForm__error'>{error}</span>
      <FilterCheckbox
        isCheckboxChecked={isCheckboxChecked}
        onCheckboxChange={onCheckboxChange}
      />
    </div>
  )
}

export default SearchForm;
