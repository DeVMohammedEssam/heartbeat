import React from 'react';
const NotificationCard = props => {
    return (
        <div className="notification-card">
            <span className="notification-card__sender">{props.sender}</span>
            <span className="notification-card__message">{props.message}</span>
        </div>
    );
}

export default NotificationCard;