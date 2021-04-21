import React from 'react';
import {
    BrowserRouter as Switch
} from "react-router-dom";
import {RouteWithSubRoutes} from "../utils/RoutingUtils";
import {Bus, Cart, Tacos} from "../tacos/Tacos";
import {About} from "../components/About/About";

const routes = [
    {
        path: "/about",
        component: About
    },
    {
        path: "/us",
        component: Tacos,
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
];

function MainAppRoutes() {
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
    );
}

export default MainAppRoutes;