import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/Routes';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userIsLogin } from './redux/actions/authActions';

class App extends React.Component {

  componentDidMount() {
    const { haveToken } = this.props
    if(haveToken.length) {
      console.log('oui');
      this.props.userIsLogin();
    }
  }

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

const mstp = (state) => {
  return {
      haveToken: state.auth.userToken,
  }
};

const mdtp = (dispatch) => {
  return bindActionCreators(
    {
      userIsLogin
    },
    dispatch
  );
};

export default connect(mstp, mdtp)(App);
