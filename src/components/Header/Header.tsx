import React from 'react';

import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

import './style.scss';

const Header: React.FC = (): JSX.Element => {

    return (
        <div className='header'>
            <Logo />
            <SearchBar/>
        </div>
    )
}

export default Header;