import React from "react";
const HeartLoader = () => {
    return (
        <div className="heart-loader">
            <div className="heart-loader__animation-container">
                <span className="heart-loader__dashes"></span>
                <span className="rotator"></span>
                <div className="heart-loader__img-container">
                    <img src="/images/heart-icon.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default HeartLoader;