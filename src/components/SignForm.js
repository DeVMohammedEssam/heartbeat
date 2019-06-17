import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/actions/user";
import { url } from "../config";
import axios from "axios";
import validateLoginInputs from "../validation/login";
import validateRegisterInputs from "../validation/register";

export class SignForm extends Component {
  state = {
    data: {
      email: "",
      password: "",
      password2: "",
      name: "",
      type: this.props.sign === "in" ? undefined : "0"
    },
    success: "",
    errors: {}
  };
  handleInputChange = e => {
    const name = e.target.name,
      value = e.target.value;
    let data = this.state.data;
    data[name] = value;

    this.setState(() => ({ data: { ...data } }));
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.sign === "up") {
      //sign up validation
      const { isValid, errors } = validateRegisterInputs(this.state.data);
      if (!isValid) this.setState(() => ({ errors }));
      else {
        axios
          .post(`${url}user/signup`, {
            data: this.state.data
          })
          .then(data => {
            if (data.data.success) {
              this.setState(() => ({
                success: "you Signed up successfully please login :)"
              }));
              setTimeout(() => {
                this.props.history.push("/");
              }, 2000);
            } else {
              this.setState(() => ({
                errors: { email: "email is already used" }
              }));
            }
          });
      }
    } else {
      //if the page was login
      //login validation
      const { isValid, errors } = validateLoginInputs({
        email: this.state.data.email,
        password: this.state.data.password
      });
      if (!isValid) {
        this.setState(() => ({ errors }));
      } else {
        //sending login request
        axios
          .post(`${url}user/login`, {
            data: this.state.data
          })
          .then(data => {
            if (data.data.success) {
              localStorage.setItem("userToken", data.data.token);
              this.props.dispatch(login()).then(() => {
                this.props.history.push("/analyze");
              });
            } else {
              this.setState(() => ({
                errors: { wrongEmailOrPassword: "wrong email or password" }
              }));
            }
          });
      }
    }
  };

  render() {
    return (
      <div>
        <form noValidate className="sign-form" onSubmit={this.handleSubmit}>
          {this.state.success && (
            <div className="alert alert-success flash-message">
              {this.state.success}
            </div>
          )}
          {this.state.error && (
            <div className="alert alert-danger flash-message">
              {this.state.error}
            </div>
          )}
          <div className="sign-form__inputs-container ">
            <input
              className="custom-input"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.data.email}
              onChange={this.handleInputChange}
              required
            />
            <input
              className="custom-input"
              type="password"
              name="password"
              placeholder="password"
              value={this.state.data.password}
              onChange={this.handleInputChange}
              required
            />

            {this.props.sign === "up" && (
              <React.Fragment>
                <input
                  className="custom-input"
                  type="name"
                  name="name"
                  placeholder="Name"
                  value={this.state.data.name}
                  onChange={this.handleInputChange}
                  required
                />
                <input
                  className="custom-input"
                  type="password"
                  name="password2"
                  placeholder="confirm password"
                  value={this.state.data.password2}
                  onChange={this.handleInputChange}
                  required
                />
                <select
                  className="custom-input"
                  name="type"
                  defaultValue={this.state.data.type}
                  onChange={this.handleInputChange}
                >
                  <option value="0">Patient</option>
                  <option value="1">Doctor</option>
                </select>
              </React.Fragment>
            )}
            <div className="btns-wrapper">
              <Link to="/" className="return-home">
                <i />
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
