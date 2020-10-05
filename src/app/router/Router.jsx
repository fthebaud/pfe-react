import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES_COMPONENTS } from './router.config';
import { D3_EXAMPLE_ROUTE, HOME_ROUTE } from './routes.const';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/"
                component={ROUTES_COMPONENTS[HOME_ROUTE]}
            />
            <Route
                exact
                path={D3_EXAMPLE_ROUTE}
                component={ROUTES_COMPONENTS[D3_EXAMPLE_ROUTE]}
            />
        </Switch>
    </BrowserRouter>
);

export default Router;
