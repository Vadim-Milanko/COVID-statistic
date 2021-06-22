import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchCountries } from '../../store/statisctics/actionCreators';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

import './style.scss';

export interface IProps {
    history: any;
    location: any;
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
}

const Header: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { searchQuery, setSearchQuery } = props;
    const dispatch = useDispatch();

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchQuery(event.target.value);
    }

    const searchStatistics = (): void => {
        dispatch(fetchCountries());
    };

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