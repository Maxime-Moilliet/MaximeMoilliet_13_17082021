import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoUpdate } from '../redux/actions/userActions';

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editstart: false,
            firstName: '',
            lastName: ''
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSumbitEdit = this.handleSumbitEdit.bind(this)
    }

    handleEdit() {
        const { firstName, lastName } = this.props.user
        this.setState({
            ...this.state,
            editstart: !this.state.editstart,
            firstName,
            lastName
        })
    }

    handleSumbitEdit() {
        const { firstName, lastName } = this.state
        const newUserInfo = {
            firstName,
            lastName
        }
        this.props.userInfoUpdate(newUserInfo)
        this.handleEdit()
    }

    render() {
        const { firstName, lastName } = this.props.user
        const { editstart } = this.state

        return (
            <main className="main bg-dark">
                <div className="header">
                    {!editstart ? <h1>Welcome back<br />{firstName} {lastName}</h1>
                    : (
                        <>
                        <h1>Welcome back</h1>
                        <div className="editUserinfo">
                            <input value={this.state.firstName} onChange={e => this.setState({...this.state, firstName: e.target.value})} className="editUserInfo__input" type="text" />
                            <input value={this.state.lastName} onChange={e => this.setState({...this.state, lastName: e.target.value})} className="editUserInfo__input" type="text" />
                        </div>
                        </>
                    )}
                    {!editstart ? <button onClick={this.handleEdit} className="edit-button">Edit Name</button>
                    : (
                        <div className="editUserinfo__container">
                            <button onClick={this.handleSumbitEdit} className="editUserInfo__button">Save</button>
                            <button onClick={this.handleEdit} className="editUserInfo__button second">Cancel</button>
                        </div>
                    )}
                </div>
                <h2 className="sr-only">Accounts</h2>
            </main>
        );
    }
}

const mstp = (state) => {
    return {
        user: state.user
    }
};
  
const mdtp = (dispatch) => {
    return bindActionCreators(
        {
            userInfoUpdate
        },
        dispatch
    );
};
  
export default connect(mstp, mdtp)(Profile);