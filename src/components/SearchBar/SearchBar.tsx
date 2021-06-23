import React from 'react';

import './style.scss';
import search from '../../assets/images/Vector.png';

export interface IProps {
    searchQuery: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { searchQuery, onInputChange } = props;

    return (
        <div className='searchBar'>
            {/* <button
                type='button'
                onClick={getTitleOrderBy}
                className='searchBar_orderBy'
            >
                ASC
            </button> */}
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