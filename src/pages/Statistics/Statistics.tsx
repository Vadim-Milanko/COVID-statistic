import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import StatisticsList from '../../components/StatisticsList/StatisticsList';
import { IStore } from '../../store/rootReducer';
import { fetchCountries } from '../../store/statisctics/actionCreators';
import { IProps } from './interfaces';

import './style.scss';

const Statistics: React.FC<IProps> = (props: IProps): JSX.Element => {
    const isLoading = useSelector<IStore, boolean>(state => state.countries.isLoading);
    const dispatch = useDispatch();

    const apiFetchCountries = (): void => {
        dispatch(fetchCountries());
    }

    useEffect(() => {
        apiFetchCountries();
    }, []);

    return (
        <div className='statistics'>
            <Header />
            <StatisticsList />
        </div>
    )
}

export default Statistics;