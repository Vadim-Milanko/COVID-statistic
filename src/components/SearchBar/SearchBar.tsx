import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCountries } from '../../store/statisctics/actionCreators';

import './style.scss';
import search from '../../assets/images/Vector.png';


const SearchBar: React.FC = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchQuery(event.target.value);
    }

    const searchStatistics = (): void => {
        dispatch(fetchCountries());
    }

    return (
        <div className='searchBar'>
            <input
                type="text"
                placeholder='Search...'
                value={searchQuery}
                onChange={onInputChange}
                className='searchBar__input' />
            <button
                type='button'
                onClick={searchStatistics}
                className="searchBar__button">
                <img src={search} alt="search" />
            </button>
        </div>
    )
}

export default SearchBar;