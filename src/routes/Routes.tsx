import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../pages/NotFound/NotFound';
import Statistics from '../pages/Statistics/Statistics';

const Routes: React.FC = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path='/' component={Statistics} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;