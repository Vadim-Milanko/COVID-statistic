import React, { MouseEventHandler } from 'react';
import classNames  from 'classnames';

import './style.scss';

interface IProps {
    listId: string | number;
    itemName: string;
    totalConfirmed: string | number;
    showDetails?: MouseEventHandler<HTMLDivElement>;
    className?: string;
}

const ListItem: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { listId, itemName, totalConfirmed, showDetails, className } = props;

    return (
        <div onClick={showDetails} className={`${classNames('listItem', className)}`}>
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