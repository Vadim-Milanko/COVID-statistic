import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import StatisticsList from '../../components/StatisticsList/StatisticsList';
import DetailsWindow from '../../components/DetailsWindow/DetailsWindow'
import { IStore } from '../../store/rootReducer';
import { fetchCountries } from '../../store/statisctics/actionCreators';
import { IProps } from './interfaces';

import './style.scss';

const Statistics: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const isLoading = useSelector<IStore, boolean>(state => state.countries.isLoading);
    const dispatch = useDispatch();
    const { history, location } = props;

    const apiFetchCountries = (): void => {
        dispatch(fetchCountries());
    }

    useEffect(() => {
        apiFetchCountries();
    }, []);

    return (
        <div className='statistics'>
            <Header
                history={history}
                location={location} />
            <StatisticsList
                setIsVisible={setIsVisible}
            />
            <DetailsWindow
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
        </div>
    )
}

export default Statistics;