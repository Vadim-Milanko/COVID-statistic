import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import StatisticsList from '../../components/StatisticsList/StatisticsList';
import DetailsWindow from '../../components/DetailsWindow/DetailsWindow';
import { fetchCountries } from '../../store/statisctics/actionCreators';
import { IDetailsInfo } from './interfaces';

import './style.scss';

const Statistics: React.FC = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [detailsInfo, setDetailsInfo] = useState<IDetailsInfo | null>(null);

    const dispatch = useDispatch();

    const apiFetchCountries = (): void => {
        dispatch(fetchCountries());
    }

    useEffect(() => {
        apiFetchCountries();
    }, []);

    return (
        <div className='statistics'>
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <StatisticsList
                setIsVisible={setIsVisible}
                setDetailsInfo={setDetailsInfo}
                searchQuery={searchQuery}
            />
            <DetailsWindow
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                detailsInfo={detailsInfo}
            />
        </div>
    )
}

export default Statistics;