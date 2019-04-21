import React, { Component } from 'react';
import Navbar from "./layout/Navbar";
class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="home">
                    <div className="home__cover"></div>
                    <p className="home__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium corporis doloribus voluptatem nemo, asperiores itaque culpa laudantium tempore obcaecati architecto.</p>
                    <div className="home__heart-logo-container">
                        <img src="images/heart-icon.png " className="home__heart-logo " alt="" />
                        <span className="home__heart-logo-subtitle ">Our mission</span>

                    </div>
                    <p className="home__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate accusantium ratione iure quaerat voluptates, harum porro magni earum illum distinctio, voluptatibus nostrum iusto. Impedit praesentium voluptatum amet ex explicabo commodi ea omnis maxime sed. Iusto ducimus dolor odio magnam doloribus architecto illo ea! Nulla aliquid ab accusamus non ipsa?</p>
                    <div className="home__right-widget-container">
                        <img className="home__right-widget-icon" src="/images/right-widget-1.png" alt="" />
                        <img className="home__right-widget-icon" src="/images/arrow.png" alt="" />
                        <img className="home__right-widget-icon" src="/images/right-widget-2.png" alt="" />
                        <img className="home__right-widget-icon" src="/images/arrow.png" alt="" />
                        <img className="home__right-widget-icon" src="/images/right-widget-3.png" alt="" />
                    </div>
                    <div className="home__checknow-logo-container">
                        <img className="home__checknow-logo" src="/images/contract.png" alt="" />
                        <span>Check Now</span>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Home;