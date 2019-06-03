import React, { Component } from 'react';
import ResultCard from "./layout/ResultCard";
import { connect } from "react-redux"
import Navbar from './layout/Navbar';
import { startGetHistory } from "../redux/actions/index"
class History extends Component {
    state = { analysis: [] }
    componentDidMount() {
        this.props.dispatch(startGetHistory()).then((response) => {
            // console.log(response.data.anaylsis)
            this.setState({ analysis: response.data.anaylsis })
        })
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="history">
                    <h3 className="history__title">History</h3>
                    <div className="row history__content mt-5">
                        <div className=" col-12 col-lg-3 order-2 order-lg-1 mt-5 mt-lg-0">
                            <div className="history__left-widget">

                                {this.state.analysis.map((analyze) => (

                                    <ResultCard status={analyze.result ? "success" : "fail"} date={() => { return analyze.date.getFullYear() + "/" + analyze.date.getMonth() + "/" + analyze.date.getDay() }} />

                                ))}

                            </div>
                        </div>
                        <div className="col-12 col-lg-9 order-1 order-lg-2">
                            <div className="history__readings ">
                                {this.state.analysis.map((analyze) => (
                                    <div className="reading">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <p className="reading__text"> age</p> <span className="reading__percentage">{analyze.age}</span>
                                            </div>
                                            <div className="col-md-3">  <p className="reading__text"> sex</p>  <span className="reading__percentage">{analyze.sex}</span>   </div>
                                            <div className="col-md-3">   <p className="reading__text"> cp</p> <span className="reading__percentage">{analyze.cp}</span>   </div>
                                            <div className="col-md-3">  <p className="reading__text"> chol</p> <span className="reading__percentage">{analyze.chol}</span>   </div>
                                            <div className="col-md-3">   <p className="reading__text"> fbs</p> <span className="reading__percentage">{analyze.fbs}</span>   </div>
                                            <div className="col-md-3">   <p className="reading__text"> restecg</p> <span className="reading__percentage">{analyze.restecg}</span>   </div>
                                            <div className="col-md-3">   <p className="reading__text"> thalach</p> <span className="reading__percentage">{analyze.thalach}</span>   </div>
                                            <div className="col-md-3">   <p className="reading__text"> exang</p> <span className="reading__percentage">{analyze.exang}</span> </div>
                                            <div className="col-md-3">   <p className="reading__text"> oldpeak</p> <span className="reading__percentage">{analyze.oldpeak}</span>   </div>
                                            <div className="col-md-3">   <p className="reading__text"> slope</p> <span className="reading__percentage">{analyze.slope}</span>   </div>
                                            <div className="col-md-3">  <p className="reading__text"> cas</p> <span className="reading__percentage">{analyze.cas}</span>   </div>
                                            <div className="col-md-3">  <p className="reading__text"> thal</p> <span className="reading__percentage">{analyze.thal}</span>   </div>
                                            <div className="col-md-3"> <p className="reading__text"> class</p> <span className="reading__percentage">{analyze.class}</span>   </div>
                                        </div>


                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect()(History);