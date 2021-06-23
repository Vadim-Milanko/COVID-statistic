import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../../components/Spinner/Spinner';
import { ICountry, IDetailsInfo } from '../../pages/Statistics/interfaces';
import { IStore } from '../../store/rootReducer';
import ListItem from '../ListItem/ListItem';

import './style.scss';

export interface IProps {
    setIsVisible: (isVisible: boolean) => void;
    setDetailsInfo: (detailInfo: IDetailsInfo | null) => void;
    searchQuery: string;
}

const StatisticsList: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { countries, isLoading } = useSelector((state: IStore) => state.countries);
    const { setIsVisible, setDetailsInfo, searchQuery } = props;

    const showDetails = (details: ICountry) => {
        const { TotalConfirmed, TotalDeaths, TotalRecovered, Country } = details;

        setIsVisible(true);
        setDetailsInfo({
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered,
            Country,
        })
    }

    const searchList = searchQuery ? countries.filter(item => item.Country.toLowerCase().includes(searchQuery.toLowerCase().trim())) : countries;

    return (
        <div className='statisticList'>
            <div className='statisticList__header'>
                <ListItem
                    listId='№'
                    itemName='Country'
                    totalConfirmed='Total Confirmed'
                    className='tableHeader'
                />
            </div>
            {
                isLoading ?
                    <Spinner
                        isLoading={isLoading}
                    /> :
                    (<div className='statisticList_items'>
                        {searchList.map((country, index) => {
                            const { TotalConfirmed, Country, ID } = country;

                            return (
                                <ListItem
                                    showDetails={() => showDetails(country)}
                                    key={ID}
                                    listId={index + 1}
                                    itemName={Country}
                                    totalConfirmed={TotalConfirmed}
                                />
                            )
                        })}
                    </div>)
            }
        </div>
    )
}

export default StatisticsList;