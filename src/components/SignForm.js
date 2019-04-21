import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/actions/user";
import axios from "axios";

class SignForm extends Component {
    state = {
        data: {
            email: "",
            password: "",
            name: "",
            type: this.props.sign === "in" ? undefined : "0"
        },
        success: "",
        error: ""

    }
    handleInputChange = (e) => {
        const name = e.target.name,
            value = e.target.value;
        let data = this.state.data;
        data[name] = value;


        this.setState(() => ({ data: { ...data } }));

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.sign === "up") {
            axios.post("https://3c61062f.ngrok.io/api/user/signup", { data: this.state.data })
                .then(data => {
                    if (data.data.success) {
                        this.setState(() => ({ success: "you Signed up successfully please login :)" }));
                        setTimeout(() => {
                            this.props.history.push("/");
                        }, 2000)
                    } else {
                        this.setState(() => ({ error: "email is already used" }));
                    }
                });


        } else {//if the page was login
            axios.post("https://3c61062f.ngrok.io/api/user/login", { data: this.state.data })
                .then(data => {
                    if (data.data.success) {
                        localStorage.setItem("userToken", data.data.token);
                        this.props.dispatch(login());
                        this.props.history.push("/analyze");
                    } else {
                        this.setState(() => ({ error: "wrong email or password" }))
                    }
                });
        }

    }

    render() {
        return (
            <div>
                <form className="sign-form" onSubmit={this.handleSubmit}>
                    {this.state.success && (<div className="alert alert-success flash-message">{this.state.success}</div>)}
                    {this.state.error && (<div className="alert alert-danger flash-message">{this.state.error}</div>)}
                    <div className="sign-form__inputs-container ">

                        <input className="custom-input" type="email" name="email" placeholder="Email" value={this.state.data.email} onChange={this.handleInputChange} required />
                        <input className="custom-input" type="password" name="password" placeholder="password" value={this.state.data.password} onChange={this.handleInputChange} required />
                        {
                            this.props.sign === "up" && (
                                <React.Fragment>
                                    <input className="custom-input" type="name" name="name" placeholder="Name" value={this.state.data.name} onChange={this.handleInputChange} required />
                                    <select className="custom-input" name="type" defaultValue={this.state.data.type} onChange={this.handleInputChange} >
                                        <option value="0">Patient</option>
                                        <option value="1">Doctor</option>
                                    </select>
                                </React.Fragment>
                            )
                        }
                        <div className="btns-wrapper">
                            <Link to="/" className="return-home">
                                <i></i>
                                <span>retrun to home</span>
                            </Link>
                            <input
                                type="submit"
                                className="custom-btn custom-btn--lightBlue"
                                value={this.props.sign === "in" ? "sign in" : "sign up"}
                            />
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(withRouter(SignForm));