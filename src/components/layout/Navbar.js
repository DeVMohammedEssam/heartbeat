import React, { Component } from 'react';
import { Link, withRouter,NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/user";
import { connect } from "react-redux";
class Navbar extends Component {
    state = {
        isSignedIn: localStorage.getItem("userToken") ? true : false,
        noti:0,
        notifications:[]
    }
    
    handleLogout = () => {
        localStorage.removeItem("userToken");
        this.props.dispatch(logout());
        this.props.history.push("/");
    }
 static getDerivedStateFromProps(props, state){

     console.log(props)
     return {notifications:props.index.notifications}
   
 }
    render() {
        return (
                <span>
            <nav className="custom-navbar" >
                <div className="custom-navbar__logo-container">
                    <img className="custom-navbar__logo" src="http://placehold.it/100/100" alt="" />
                </div>
                <div className="custom-navbar__content">
                    <div className="custom-navbar__links">
                             <Link className="custom-navbar__link"  to="/">Home </Link>
                        <span className="custom-navbar__vertical-line"></span>

                               <Link className="custom-navbar__link"  to="/">How To use </Link>
                        <span className="custom-navbar__vertical-line"></span>
                              <Link className="custom-navbar__link"  to="/">privacy </Link>
                   
                    </div>
                    {
                        this.state.isSignedIn ? (
                            <div className="custom-navbar__signed-container">
                            

                               {this.props.user.type === 0 && (
                                    /* is patient */
                                          <React.Fragment>
                                 
                                        <div class="dropdown">
                                    <button class="btn  dropdown-toggle custom-navbar__notification" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      {this.state.notifications.length>0?  <span className="badge badge-pill count">{this.state.notifications.length}</span>:""}
                                        <i className="fas fa-bell"></i>
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                             
                    {this.state.notifications.map((noti)=>(
                                                                <Link to="/notifications" class="dropdown-item">{noti.message}</Link>

                    ))}
                                        <div className="text-center">
                                            <Link to="/notifications">See more</Link>
                                        </div>
                                    </div>
                                </div>
                                            </React.Fragment>
                                )}


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
 <nav className="dashnavbar" >
                    <ul class="nav justify-content-center">
            
                  {this.props.user.type === 0 && (
                                    /* is patient */
                                          <React.Fragment>

                                    <li class="nav-item">
                                        <NavLink activeClassName="nav-active"  className="nav-link" to="/history">History </NavLink>
                                    </li>
                                      <li class="nav-item">
                                        <NavLink activeClassName="nav-active"  className="nav-link" to="/analyze">Analyze </NavLink>
                                    </li>
                                 
                                            </React.Fragment>
                                )}
                                     {this.props.user.type === 1 && (
                                    /*  is doctor */
                                    <React.Fragment>
                                       
                                    <li class="nav-item">
                                            <NavLink activeClassName="nav-active" className="nav-link" to="/Analysis">Analysis </NavLink>
                                        </li> 
                                        
                                    <li class="nav-item">
                                            <NavLink activeClassName="nav-active"  className="nav-link" to="/broadcast">broadcast </NavLink>
                                        </li>
                                     
                                    <li class="nav-item">
                                            <NavLink activeClassName="nav-active"  className="nav-link" to="/notifications">Messages </NavLink>
                                        </li>
                                    </React.Fragment>
                                )}
                
            
                </ul>
             
            </nav >
 


      </span>
        );
    }
}

const mapStateToProps = (state, props) => ({
    user: state.user,
    index:state.index
})

export default connect(mapStateToProps)(withRouter(Navbar));