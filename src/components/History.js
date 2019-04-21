import React, { Component } from 'react';
import ResultCard from "./layout/ResultCard";
import Navbar from './layout/Navbar';
class History extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="history">
                    <h3 className="history__title">History</h3>
                    <div className="row history__content mt-5">
                        <div className=" col-12 col-lg-3 order-2 order-lg-1 mt-5 mt-lg-0">
                            <div className="history__left-widget">
                                <ResultCard status="fail" date="25/5/2018" />
                                <ResultCard status="success" date="25/5/2018" />
                                <ResultCard status="fail" date="25/5/2018" />
                                <ResultCard status="success" date="25/5/2018" />
                                <ResultCard status="success" date="25/5/2018" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-9 order-1 order-lg-2">
                            <div className="history__readings ">
                                <div className="reading">
                                    <span className="reading__text">heart si. no</span>
                                    <span className="reading__percentage">20%</span>
                                </div>
                                <div className="reading">
                                    <span className="reading__text">heart si. no</span>
                                    <span className="reading__percentage">20%</span>
                                </div>
                                <div className="reading">
                                    <span className="reading__text">heart si. no</span>
                                    <span className="reading__percentage">20%</span>
                                </div>
                                <div className="reading">
                                    <span className="reading__text">heart si. no</span>
                                    <span className="reading__percentage">20%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default History;