import React from 'react';

import './style.scss';
import search from '../../assets/images/Vector.png';

export interface IProps {
    searchQuery: string;
    onInputChange: any;
}

const SearchBar: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { searchQuery, onInputChange } = props;

    const getTitleOrderBy = () => {
        
    }

    return (
        <div className='searchBar'>
            <button
                type='button'
                onClick={getTitleOrderBy}
                className='searchBar_orderBy'
            >
                ASC
            </button>
            <input
                type="text"
                placeholder='Search...'
                value={searchQuery}
                onChange={onInputChange}
                className='searchBar__input'
            />
            <img
                src={search}
                alt="search"
                className='searchBar__img'
            />
        </div>
    )
}

export default SearchBar;