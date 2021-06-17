import React from 'react';

import './style.scss';
import search from '../../../../assets/images/Vector.png'

const SearchBar: React.FC = (): JSX.Element => {
    return (
        <div className='searchBar'>
            <input type="text" placeholder='Search...' className='searchBar__input' />
            <button className="searchBar__button">
                <img src={search} alt="search" />
            </button>
        </div>
    )
}

export default SearchBar;