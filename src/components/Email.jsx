import React from 'react';

function Email(props) {
    const email = props.email;
    return (
        <li
            key={email.id}
            className={`email ${email.read ? 'read' : 'unread'}`}
        >
            <div className="select">
                <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => props.toggleRead(email)}
                />
            </div>
            <div className="star">
                <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => props.toggleStar(email)}
                />
            </div>
            <div className="sender" onClick={props.selectEmail}>{email.sender}</div>
            <div className="title" onClick={props.selectEmail}>{email.title}</div>
        </li>
    );
}

export default Email;