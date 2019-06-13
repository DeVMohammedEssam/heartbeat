import React from 'react';
import Navbar from './layout/Navbar';
import axios from "axios"
import {url} from "../config"
class Analysis extends React.Component{
    state={
      postive:0
      ,negative:0,
      all:0
    }
       componentDidMount(){
        axios.get(url+"analysis").then((response)=>{
                this.setState({
                    ...response.data
                })
        })
    }
  render(){
    return (
        <React.Fragment>
            <Navbar />
            <section className="analysis">
                <h3 className="analysis__title">Analysis</h3>
                <div className="analysis__cards-container">
                    <div className="analysis__card">
                        <div className="analysis__card__icon-container">
                            <img src="/images/users-group.png" alt="" />
                        </div>
                        <div className="analysis__card__number">{this.state.all}</div>
                    </div>
                    <div className="analysis__card">
                        <div className="analysis__card__icon-container">
                            <img src="/images/patient.png" alt="" />
                        </div>
                        <div className="analysis__card__number">{this.state.postive}</div>
                    </div>
                    <div className="analysis__card">
                        <div className="analysis__card__icon-container">
                            <img src="/images/verified.png" alt="" />
                        </div>
                        <div className="analysis__card__number">{this.state.negative}</div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

export default Analysis;