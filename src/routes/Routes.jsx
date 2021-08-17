import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../screens/Home';
import NavBar from '../components/NavBar';
import { Footer } from '../components/Footer';
import Login from '../screens/Login';
import { connect } from "react-redux";
import { Profile } from '../screens/Profile';


class Routes extends React.Component {
    render() {
        return (
            <>
            <NavBar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                {this.props.isLogged && <Route exact path="/profile" component={Profile} />}
            </Switch>

            <Footer />
            </>
        );
    }
}

const mstp = (state) => {
    return {
        isLogged: state.auth.isLogged,
    }
};
  
  
export default connect(mstp)(Routes);