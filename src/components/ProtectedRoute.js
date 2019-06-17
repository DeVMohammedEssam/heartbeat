import React from 'react';
import { Route } from "react-router-dom";
import Sorry from "./Sorry"
const ProtectedRoute = ({ component: Component, rest }) => {
    return (
        <Route {...rest} render={(props) => {
            if (localStorage.getItem("userToken")) {//is logged in
                return (<Component />)
            } else {//is not logged in
         return (<Sorry {...props} />)
               // props.history.push("/");
            }
        }} />
    );
}

export default ProtectedRoute;