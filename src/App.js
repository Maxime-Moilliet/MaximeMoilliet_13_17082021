import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userIsLogin } from './redux/actions/authActions';
import { getUserInfo } from './redux/actions/userActions';

class App extends React.Component {

  componentDidMount() {
    const { haveToken } = this.props
    if(haveToken.length) {
      this.props.userIsLogin();
      this.props.getUserInfo();
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
      userIsLogin,
      getUserInfo
    },
    dispatch
  );
};

export default connect(mstp, mdtp)(App);
