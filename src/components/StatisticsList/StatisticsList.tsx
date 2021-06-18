import React from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../../store/rootReducer';
import ListItem from '../ListItem/ListItem';

import './style.scss';

const StatisticsList: React.FC = (): JSX.Element => {
    const { countries, isLoading } = useSelector((state: IStore) => state.countries);

    console.log(countries);


    return (
        <div className='statisticList'>
            <div className='statisticList__header'>
                <ListItem
                    listId='#'
                    itemName='Country'
                    totalConfirmed='Total Confirmed'
                />
            </div>
            <div className='statisticList_items'>
                {
                    countries.map((country, index) => {
                        const { TotalConfirmed, Country } = country;

                        return (
                            <ListItem
                                key={country.ID}
                                listId={index + 1}
                                itemName={Country}
                                totalConfirmed={TotalConfirmed}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StatisticsList;