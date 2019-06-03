import React, { Component } from 'react';
import Navbar from "./layout/Navbar";
class BroadCast extends Component {
    state = {
        sendNowClicked: false,
        broadcast: {
            message: "",
            sendTo: "patients"
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(() => ({ sendNowClicked: true }));
        setTimeout(() => this.setState(() => ({ sendNowClicked: false })), 2000);
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

                                <select name="sendTo" className=" custom-btn btn--darkGrey" onChange={this.handleChange} defaultValue={this.state.broadcast.sendTo}>
                                    <option value="patients">patients</option>
                                    <option value="doctors">doctors</option>
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