import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Analyze from '../components/Analyze';
import History from "../components/History";
import Notifications from '../components/Notifications';
import Analysis from "../components/Analysis";
import BroadCast from "../components/BroadCast";
import SignForm from '../components/SignForm';
import ProtectedRoute from "../components/ProtectedRoute";
import PageNotFound from "../components/PageNotFound";
const AppRouter = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/analyze" component={Analyze} />
                <ProtectedRoute path="/history" component={History} />
                <ProtectedRoute path="/notifications" component={Notifications} />
                <ProtectedRoute path="/analysis" component={Analysis} />
                <Route path="/broadcast" component={BroadCast} />
                <Route path="/signin" render={() => (<SignForm sign="in" />)} />
                <Route path="/signup" render={() => (<SignForm sign="up" />)} />
                <Route component={PageNotFound} />
            </Switch>
        </React.Fragment>
    );
}

export default AppRouter;