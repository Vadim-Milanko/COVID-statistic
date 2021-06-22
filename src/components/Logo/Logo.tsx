import React from 'react';

import logo from '../../assets/images/logo.png';
import './style.scss';

const Logo: React.FC = (): JSX.Element => {
    return (
        <div className='logo'>
            <div className='logo__img'>
                <img src={logo} alt="logo" />
            </div>
            <h1 className='logo__name'>
                Statistics
            </h1>
        </div>
    )
}

export default Logo;