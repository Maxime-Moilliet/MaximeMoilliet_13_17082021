import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginUser } from '../redux/actions/authActions';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        const user = {
            email,
            password,
        };
        this.props.loginUser(user);
    }
    
    render() {
        const { email, password } = this.state;
        const { errorLogin, isLogged } = this.props;
        
        if(isLogged) {
            window.location = '/profile'
        }

        return(
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input value={email} onChange={e => this.setState({...this.state, email: e.target.value})} type="email" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input value={password} onChange={e => this.setState({...this.state, password: e.target.value})} type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        {errorLogin && <div className="sign-in-error">
                            {errorLogin}
                        </div>}
                        <button type="submit" className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        );
    }
}

const mstp = (state) => {
    return {
        errorLogin: state.auth.errorLoginFailed,
        isLogged: state.auth.isLogged,
    }
};
  
const mdtp = (dispatch) => {
    return bindActionCreators(
        {
            loginUser
        },
        dispatch
    );
};
  
export default connect(mstp, mdtp)(Login);