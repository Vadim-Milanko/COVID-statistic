import React from 'react';

import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

import './style.scss';

export interface IProps {
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
}

const Header: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { searchQuery, setSearchQuery } = props;

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchQuery(event.target.value);
    }

    return (
        <div className='header'>
            <Logo />
            <SearchBar
                searchQuery={searchQuery}
                onInputChange={onInputChange}
            />
        </div>
    )
}

export default Header;