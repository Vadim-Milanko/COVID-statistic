import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'none',
        },
        visible: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            height: '100%',
            background: '#000',
            opacity: '0.9',
        }
    }),
);

export interface IProps {
    isLoading: boolean;
}

const Spinner: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { isLoading } = props;
    const classes = useStyles()

    return (
        <div className={!isLoading ? classes.root : classes.visible}>
            <CircularProgress size={80} />
        </div>
    )
}

export default Spinner;