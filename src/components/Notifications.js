import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import NotificationCard from "./layout/NotificationCard";
class Notifications extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <section className="notifications">
                    <h3 className="notifications__title">Notifications</h3>
                    <div className="notifications__list">
                        <NotificationCard sender="system" message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non!" />
                        <NotificationCard sender="system" message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non!" />
                        <NotificationCard sender="system" message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non!" />
                        <NotificationCard sender="system" message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non!" />
                        <NotificationCard sender="system" message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non!" />
                        <NotificationCard sender="system" message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non!" />
                        <NotificationCard sender="system" message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non!" />
                        <NotificationCard sender="system" message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non!" />
                        <NotificationCard sender="system" message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non!" />
                        <NotificationCard sender="system" message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non!" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Notifications;