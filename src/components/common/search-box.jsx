"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function SearchBox() {
  const pathname = usePathname();  
  useEffect(() => {
    document.querySelector('body').addEventListener('click', onBodyClick);

    return () => {
      document.querySelector('body').removeEventListener('click', onBodyClick);
    };
  }, []);

  useEffect(() => {
    document.querySelector('.header-search.show-results') &&
      document.querySelector('.header-search.show-results').classList.remove('show-results');
  }, [pathname]);

  function onSearchClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.parentNode.classList.toggle('show');
  }

  function onBodyClick(e) {
    if (e.target.closest('.header-search'))
      return (
        e.target.closest('.header-search').classList.contains('show-results') ||
        e.target.closest('.header-search').classList.add('show-results')
      );

    document.querySelector('.header-search.show') &&
      document.querySelector('.header-search.show').classList.remove('show');
    document.querySelector('.header-search.show-results') &&
      document.querySelector('.header-search.show-results').classList.remove('show-results');
  }

  return (
    <div className='header-search hs-simple'>
      <a href='#' className='search-toggle' role='button' onClick={onSearchClick}>
        <i className='icon-search-3'></i>
      </a>
      <form
        action='#'
        method='get'
        onSubmit={() => {
          console.log('submited');
        }}
        className='input-wrapper'
      >
        <input type='text' className='form-control' name='search' autoComplete='off' placeholder='Search...' required />

        <button className='btn btn-search' type='submit'>
          <i className='d-icon-search'></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
