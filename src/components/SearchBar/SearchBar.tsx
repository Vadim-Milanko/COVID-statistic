import React from 'react';

import './style.scss';
import search from '../../assets/images/Vector.png';

export interface IProps {
    searchQuery: string;
    onInputChange: any;
    searchStatistics: any;
}

const SearchBar: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { searchQuery, onInputChange, searchStatistics } = props;

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