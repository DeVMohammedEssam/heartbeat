import React, { Component } from 'react';
import Navbar from "./layout/Navbar";
import {sendNotification} from "../redux/actions/index"
class BroadCast extends Component {
    state = {
        sendNowClicked: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(() => ({ sendNowClicked: true }));
 /*
        this.props.dispatch(sendNotification(data)).then(()=>{
 this.setState({sendNowClicked:false})
        })
*/
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <form className="broadcast" onSubmit={this.handleSubmit}>
                    <h3 className="broadcast__title">Broadcast</h3>
                    <div className="broadcast__content">
                        <div className="broadcast__textbox">
                            <textarea className="custom-input" name="broadcast-message" placeholder="Send message"></textarea>
                            {this.state.sendNowClicked && (
                                <span className="done-image-container"></span>
                            )}
                        </div>
                        <div className="broadcast__send-to ">
                            <div className="wrapper">

                                <select name="sentTo" className=" custom-btn btn--darkGrey">
                                    <option value="patients">patients</option>
                                    <option value="doctors">negative people</option>
                                </select>
                                <span className="subtitle">message will be sent to: 26,381 users</span>
                            </div>
                            <input className="broadcast__send-now custom-input " type="submit" value="Send Now" />
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default BroadCast;