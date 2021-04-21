import React from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import {RouteWithSubRoutes} from "./utils/RoutingUtils";
import NavBar from "./components/NavBar/NavBar";
import {Grommet} from "grommet";
import {Tacos, Bus, Cart} from "./tacos/Tacos";
import './App.css';
import {About} from "./components/About/About";
import {UnitedStates} from "./components/UnitedStates/UnitedStates";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/About",
        component: About
    },
    {
        path: "/us",
        component: UnitedStates
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

export default function RouteConfigExample() {
    return (
        <Grommet plain>
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </div>
            </Router>
        </Grommet>
    );
}

