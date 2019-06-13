import React, { Component } from 'react';
import Navbar from "./layout/Navbar";
import { sendNotification } from "../redux/actions/index"
import {connect} from "react-redux"
class BroadCast extends Component {
    state = {
        sendNowClicked: false,
        broadcast: {
            message: "",
            result: "1"
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(() => ({ sendNowClicked: true }));
     this.props.dispatch(sendNotification(this.state.broadcast)).then(()=>{
        this.setState({sendNowClicked:false})
               })
       
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            broadcast: {
                ...this.state.broadcast, [name]: value
            }
        })
        
          
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <form className="broadcast" onSubmit={this.handleSubmit}>
                    <h3 className="broadcast__title">Broadcast</h3>
                    <div className="broadcast__content">
                        <div className="broadcast__textbox">
                            <textarea className="custom-input" name="message" placeholder="Send message" onChange={this.handleChange} value={this.state.broadcast.message}></textarea>
                            {this.state.sendNowClicked && (
                                <span className="done-image-container"></span>
                            )}
                        </div>
                        <div className="broadcast__send-to ">
                            <div className="wrapper">

                                <select name="result" className=" custom-btn btn--darkGrey" onChange={this.handleChange} defaultValue={this.state.broadcast.sendTo}>
                                    <option selected value="1">patients</option>
                                    <option value="0">negative people</option>
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

export default connect()(BroadCast);