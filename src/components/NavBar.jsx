import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogout } from '../redux/actions/authActions';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.userLogout()
    window.location = "/"
  }

    render() {
      const { user } = this.props
        return (
          <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
              <img
                className="main-nav-logo-image"
                src="./images/argentBankLogo.png"
                alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {this.props.user.firstName ? (
              <div className="main-nav-container">
                <Link to="/profile" className="main-nav-item">
                  <i className="fa fa-user-circle"></i>
                  {user.firstName}
                </Link>
                <button onClick={this.handleLogout} className="main-nav-item logout" href="./index.html">
                  <i className="fa fa-sign-out-alt"></i>
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login" className="main-nav-item">
                  <i className="fa fa-user-circle"></i>
                  Sign In
                </Link>
              </div>
            )}
          </nav>
        );
    }
}

const mstp = (state) => {
  return {
      user: state.user,
  }
};

const mdtp = (dispatch) => {
  return bindActionCreators(
      {
          userLogout
      },
      dispatch
  );
};

export default connect(mstp, mdtp)(NavBar);