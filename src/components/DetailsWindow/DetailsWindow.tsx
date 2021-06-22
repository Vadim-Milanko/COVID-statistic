import React from 'react';

import { IDetailsInfo } from '../../pages/Statistics/interfaces';
import ModalWindow from '../ModalWindow/ModalWindow';

import './style.scss';

import confirmed from '../../assets/images/confirmed.png';
import deaths from '../../assets/images/deaths.png';
import recovered from '../../assets/images/recovered.png';

export interface IProps {
    isVisible: boolean;
    detailsInfo: IDetailsInfo | null;
    setIsVisible: (isVisible: boolean) => void;
}

const DetailsWindow: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { isVisible, setIsVisible, detailsInfo } = props;

    const closeModal = () => setIsVisible(false);

    const modalData = (
        <div className='modalData'>
            <h3 className='modalData__detailsHeader'>
                Kiev
            </h3>
            <div className='modalData__detailsBody'>
                <div className='modalData__deteilsItem'>
                    <div className="modalData__img">
                        <img src={confirmed} alt="Total Confirmed" />
                    </div>
                    <div className="modalData__itemName">Total Confirmed</div>
                    <div className="modalData__count">{detailsInfo?.TotalConfirmed}</div>
                </div>
                <div className='modalData__deteilsItem'>
                    <div className="modalData__img">
                        <img src={deaths} alt="Total Confirmed" />
                    </div>
                    <div className="modalData__itemName">Total Deaths</div>
                    <div className="modalData__count">{detailsInfo?.TotalDeaths}</div>
                </div>
                <div className='modalData__deteilsItem'>
                    <div className="modalData__img">
                        <img src={recovered} alt="Total Confirmed" />
                    </div>
                    <div className="modalData__itemName">Total Recovered</div>
                    <div className="modalData__count">{detailsInfo?.TotalRecovered}</div>
                </div>
            </div>
            <button className='modalData__button' onClick={closeModal}>OK</button>
        </div>
    );

    return (
        <div>
            <ModalWindow
                isVisible={isVisible}
                modalData={modalData}
                setIsVisible={setIsVisible}
            />
        </div>
    )
}

export default DetailsWindow;