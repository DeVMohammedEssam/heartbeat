import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import HeartLoader from "./layout/HeartLoader";
import {startAnalyze} from "../redux/actions/index"
class Analyze extends Component {
    state = {
        analyzeClicked: false
    }
    handleSubmit = (e) => {

        e.preventDefault();
        this.setState(() => ({ analyzeClicked: true }));//show loader
     /*   startAnalyze().then(()=>{  //Add Analyze Data to StartAnalyze Function as one param

           this.setState(() => ({ analyzeClicked: false })); 
        })
        */

    }
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
                            <form className="analyze__check-form col-12 col-lg-8 " onSubmit={this.handleSubmit}>
                                <h4 className="analyze__check-title">check your heart</h4>
                                <div className="analyze__inputs-container ">
                                    <input type="text" className="analyze__input custom-input " placeholder="age" name="age" />
                                    <input type="text" className="analyze__input custom-input " placeholder="sex" name="sex" />
                                    <input type="text" className="analyze__input custom-input " placeholder="cp" name="cp" />
                                    <input type="text" className="analyze__input custom-input " placeholder="trestbps" name="trestbps" />
                                    <input type="text" className="analyze__input custom-input " placeholder="chol" name="chol" />
                                    <input type="text" className="analyze__input custom-input " placeholder="fbs" name="fbs" />
                                    <input type="text" className="analyze__input custom-input " placeholder="restecg" name="restecg" />
                                    <input type="text" className="analyze__input custom-input " placeholder="thalach" name="thalach" />
                                    <input type="text" className="analyze__input custom-input " placeholder="exang" name="exang" />
                                    <input type="text" className="analyze__input custom-input " placeholder="oldpeak" name="oldpeak" />
                                    <input type="text" className="analyze__input custom-input " placeholder="slope" name="slope" />
                                    <input type="text" className="analyze__input custom-input " placeholder="ca" name="ca" />
                                    <input type="text" className="analyze__input custom-input " placeholder="thal" name="thal" />
                                </div>

                                <input type="submit" value="Analyize Now" className=" analyze__analye-btn custom-btn custom-btn--lightBlue" />
                            </form>
                        )}

                    <div className=" col-12  col-lg-3">
                        <aside className="analyze__note">
                            <p className="analyze__note__text"> adi cumque earum provident sint accusantium odit, eveniet animi perferendis.</p>
                            <p className="analyze__note__text">sasperiores cumque earum provident sint accusantium odit, eveniet animi perferendis.</p>
                            <p className="analyze__note__text"> as asperiores cumque earum provident sint accusantium odit, eveniet animi perferendis.</p>
                            <p className="analyze__note__text"> cumque earum provident sint accusantium odit, eveniet animi perferendis.</p>
                        </aside>
                        <aside className="analyze__note-bottom">
                            <p className="analyze__note__text"> provident sint accusantium odit, eveniet animi perferendis.</p>
                            <p className="analyze__note__text"> provident sint accusantium odit, eveniet animi perferendis.</p>
                        </aside>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Analyze;