import React from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../../store/rootReducer';
import ListItem from '../ListItem/ListItem';

import './style.scss';

export interface IProps {
    setIsVisible: (isVisible: boolean) => void;
}

const StatisticsList: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { countries, isLoading } = useSelector((state: IStore) => state.countries);
    const { setIsVisible } = props;

    const showDetails = () => {
        setIsVisible(true);
    }

    return (
        <div className='statisticList'>
            <div className='statisticList__header statisticList_items'>
                <ListItem
                    listId='№'
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
                                showDetails={showDetails}
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