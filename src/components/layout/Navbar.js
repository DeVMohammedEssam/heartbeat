import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { logout } from "../../redux/actions/user";
import { connect } from "react-redux";
class Navbar extends Component {
    state = {
        isSignedIn: localStorage.getItem("userToken") ? true : false
    }
    handleLogout = () => {
        localStorage.removeItem("userToken");
        this.props.dispatch(logout());
        this.props.history.push("/");
    }
    render() {
        return (
            <nav className="custom-navbar" >
                <div className="custom-navbar__logo-container">
                    <img className="custom-navbar__logo" src="http://placehold.it/100/100" alt="" />
                </div>
                <div className="custom-navbar__content">
                    <div className="custom-navbar__links">
                        <a href="" className="custom-navbar__link">How to use</a>
                        <span className="custom-navbar__vertical-line"></span>
                        <a href="" className="custom-navbar__link">privacy</a>
                    </div>
                    {
                        this.state.isSignedIn ? (
                            <div className="custom-navbar__signed-container">
                                <span className="custom-navbar__page-title">
                                    title<span>|</span>title
                                </span>
                                <div className="custom-navbar__notification">
                                    <i className="fas fa-bell"></i>
                                    <span className="badge badge-pill count">5</span>
                                </div>

                                <div className="info">
                                    <span className="username">{this.props.user.email}</span>
                                    <button onClick={this.handleLogout} className=" btn btn-link logout">logout</button>
                                </div>
                            </div>
                        ) : (
                                <div className="custom-navbar__buttons">
                                    <Link to="/signin" className="custom-navbar__button custom-btn custom-btn--white">Login</Link>
                                    <Link to="/signup" className="custom-navbar__button custom-btn custom-btn--white">Signup</Link>
                                </div>
                            )
                    }

                </div>

            </nav >
        );
    }
}

const mapStateToProps = (state, props) => ({
    user: state.user
})

export default connect(mapStateToProps)(withRouter(Navbar));