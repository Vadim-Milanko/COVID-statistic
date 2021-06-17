import React from 'react';

import './style.scss';
import logo from '../../../../assets/images/logo.png';

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