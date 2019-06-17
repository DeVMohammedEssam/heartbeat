import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import HeartLoader from "./layout/HeartLoader";
import {connect} from "react-redux"
import { startAnalyze } from "../redux/actions/index";
import validateAnalyzeInputs from "../validation/analyze";
export class Analyze extends Component {
  state = {
    analyzeClicked: false,
    data: {
      age: "",
      sex: "male",
      cp: "",
      trestbps: "",
      chol: "",
      fbs: "",
      restecg: "",
      thalach: "",
      exang: "",
      oldpeak: "",
      slope: "",
      ca: "",
      thal: ""
    },
    errors: {}
  };
  handleSubmit = e => {
    e.preventDefault();
    const { isValid, errors } = validateAnalyzeInputs(this.state.data);

    if (!isValid) {
      this.setState(() => ({ errors }));
    } else {
      this.setState(() => ({ analyzeClicked: true })); //show loader

    this.props.dispatch(startAnalyze(this.state.data)).then(()=>{  //Add Analyze Data to StartAnalyze Function as one param
            
                       this.setState(() => ({ analyzeClicked: false })); 
                    }) 
    }
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ data: { ...this.state.data, [name]: value } }));
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="analyze row">
          {this.state.analyzeClicked ? (
            /* data submitted and waiting for result */
            <div className="col-12 col-lg-8 analyze__loader">
              <HeartLoader />
            </div>
          ) : (
            /* did not submit yet */
            <form
              className="analyze__check-form col-12 col-lg-8 "
              onSubmit={this.handleSubmit}
            >
              <h4 className="analyze__check-title">check your heart</h4>
              <div className="analyze__inputs-container ">
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="age"
                  name="age"
                  value={this.state.data.age}
                />
                <select
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="sex"
                  name="sex"
                  defaultValue={this.state.data.sex}
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="cp"
                  name="cp"
                  value={this.state.data.cp}
                />
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="trestbps"
                  name="trestbps"
                  value={this.state.data.trestbps}
                />
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="chol"
                  name="chol"
                  value={this.state.data.chol}
                />
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="fbs"
                  name="fbs"
                  value={this.state.data.fbs}
                />
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="restecg"
                  name="restecg"
                  value={this.state.data.restecg}
                />
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="thalach"
                  name="thalach"
                  value={this.state.data.thalach}
                />
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="exang"
                  name="exang"
                  value={this.state.data.exang}
                />
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="oldpeak"
                  name="oldpeak"
                  value={this.state.data.oldpeak}
                />
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="slope"
                  name="slope"
                  value={this.state.data.slope}
                />
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="ca"
                  name="ca"
                  value={this.state.data.ca}
                />
                <input
                  type="text"
                  className="analyze__input custom-input "
                  onChange={this.handleChange}
                  placeholder="thal"
                  name="thal"
                  value={this.state.data.thal}
                />
              </div>

              <input
                type="submit"
                value="Analyize Now"
                className=" analyze__analye-btn custom-btn custom-btn--lightBlue"
              />
            </form>
          )}

          <div className=" col-12  col-lg-3">
            <aside className="analyze__note">
              <p className="analyze__note__text">
                {" "}
                adi cumque earum provident sint accusantium odit, eveniet animi
                perferendis.
              </p>
              <p className="analyze__note__text">
                sasperiores cumque earum provident sint accusantium odit,
                eveniet animi perferendis.
              </p>
              <p className="analyze__note__text">
                {" "}
                as asperiores cumque earum provident sint accusantium odit,
                eveniet animi perferendis.
              </p>
              <p className="analyze__note__text">
                {" "}
                cumque earum provident sint accusantium odit, eveniet animi
                perferendis.
              </p>
            </aside>
            <aside className="analyze__note-bottom">
              <p className="analyze__note__text">
                {" "}
                provident sint accusantium odit, eveniet animi perferendis.
              </p>
              <p className="analyze__note__text">
                {" "}
                provident sint accusantium odit, eveniet animi perferendis.
              </p>
            </aside>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(Analyze);
