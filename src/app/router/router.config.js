import { HOME_ROUTE, D3_EXAMPLE_ROUTE } from 'app/router/routes.const';
import HomeRoute from 'app/router/routes/home-route/HomeRoute';
import D3ExampleRoute from 'app/router/routes/d3-example-route/D3ExampleRoute';

export const ROUTES_COMPONENTS = {
    [HOME_ROUTE]: HomeRoute,
    [D3_EXAMPLE_ROUTE]: D3ExampleRoute,
};
