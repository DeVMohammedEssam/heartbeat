import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import NotificationCard from "./layout/NotificationCard";
import {startGetNotifications} from "../redux/actions/index"
import {connect} from "react-redux"
class Notifications extends Component {
    state = {notifications:[]}
    componentDidMount(){
        this.props.dispatch(startGetNotifications()).then((response)=>{
            this.setState({notifications:response.data.notifications})
        })
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <section className="notifications">
                    <h3 className="notifications__title">Notifications</h3>
                    <div className="notifications__list">
                        {this.state.notifications.map((notification)=>(
                        <NotificationCard sender={notification.from} message={notification.message} />
                        ))}
                    
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default connect()(Notifications);