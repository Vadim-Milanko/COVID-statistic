import React from 'react';

import './style.scss';

interface IProps {
    listId: string | number;
    itemName: string;
    totalConfirmed: string | number;
}

const ListItem: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { listId, itemName, totalConfirmed } = props;

    return (
        <div className='listItem'>
            <div className='listItem__number'>
                {listId}
            </div>
            <div className='listItem__country'>
                {itemName}
            </div>
            <div className='listItem__totalConfirmed'>
                {totalConfirmed}
            </div>
        </div>
    )
}

export default ListItem;