import React from 'react';
const ResultCard = (props) => {
    return (
        <div className={`result-card`}>
            <span className={`result-card__status ${props.status === "fail" ? "result-card__status--fali" : "result-card__status--success"}`}>{props.status}</span>
            <span className="result-card__vertical-line"></span>
            <span className="result-card__date">{props.date}</span>
        </div>
    );
}

export default ResultCard;