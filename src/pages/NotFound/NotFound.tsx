import React from 'react';

import './style.scss';
import errorImg from '../../assets/images/404.png'

const NotFound: React.FC = (): JSX.Element => {
    return (
        <div className='notFoundWrapper'>
            <img src={errorImg} alt="404" />
        </div>
    )
}

export default NotFound;