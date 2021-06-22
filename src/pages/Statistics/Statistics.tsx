import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import StatisticsList from '../../components/StatisticsList/StatisticsList';
import DetailsWindow from '../../components/DetailsWindow/DetailsWindow';

import { fetchCountries } from '../../store/statisctics/actionCreators';
import { IProps, IDetailsInfo } from './interfaces';

import './style.scss';


const Statistics: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [detailsInfo, setDetailsInfo] = useState<IDetailsInfo | null>(null);

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
                location={location}
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