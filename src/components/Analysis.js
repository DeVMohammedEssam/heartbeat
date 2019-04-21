import React from 'react';
import Navbar from './layout/Navbar';
const Analysis = () => {
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
                        <div className="analysis__card__number">25,22l</div>
                    </div>
                    <div className="analysis__card">
                        <div className="analysis__card__icon-container">
                            <img src="/images/patient.png" alt="" />
                        </div>
                        <div className="analysis__card__number">25,22l</div>
                    </div>
                    <div className="analysis__card">
                        <div className="analysis__card__icon-container">
                            <img src="/images/verified.png" alt="" />
                        </div>
                        <div className="analysis__card__number">25,22l</div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Analysis;