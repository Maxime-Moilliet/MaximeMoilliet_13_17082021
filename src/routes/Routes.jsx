import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../screens/Home';
import Login from '../screens/Login';

export class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        );
    }
}