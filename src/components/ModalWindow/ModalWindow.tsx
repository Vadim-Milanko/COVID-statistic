import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

type ModalData = JSX.Element | HTMLElement | string;

export interface IProps {
    modalData: ModalData;
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
}

const ModalWindow: React.FC<IProps> = (props: IProps): JSX.Element | null => {
    const { modalData, isVisible, setIsVisible } = props;

    const renderModalBody = () => ReactDOM.createPortal(
        <div className="modalOverlay" onClick={() => setIsVisible(false)}>
            <div className="modalOverlay__body" onClick={(e) => e.stopPropagation()}>{modalData}</div>
        </div>
        ,
        document.querySelector('#root') as HTMLElement
    );

    return isVisible ? renderModalBody() : null;
}

export default ModalWindow;