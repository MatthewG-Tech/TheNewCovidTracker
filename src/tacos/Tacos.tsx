import {Link, Switch} from "react-router-dom";
import React from "react";
import { RouteWithSubRoutes } from "../utils/RoutingUtils";

export function Tacos({ routes }: any) {
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route: any, i: any) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </div>
    );
}

export function Bus() {
    return <h3>Bus</h3>;
}

export function Cart() {
    return <h3>Cart</h3>;
}
