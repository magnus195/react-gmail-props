import rateStarButton from '../assets/icons/rate-star-button.png';
import backArrow from '../assets/icons/back-arrow.png';
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png';
import flaticonWelcomeImage from '../assets/images/flaticon-welcome-image.png';

function EmailView(props) {
    const email = props.email;
    return (
        <>
            <div className={"email-navbar"}>
                <button onClick={props.onClose}>Back</button>
            </div>
            <div className={"email-view"}>
                <div className="title">
                    <h1>{email.title}</h1>
                </div>
                <header>
                    <div className="avatar"></div>
                    <div className="email-info">
                        <div className="sender-info">
                            <h2>{email.sender}</h2>
                            <em>&lt;no-reply@example.com&gt;</em>
                        </div>
                        <div className="user-info">
                            <p>
                                to me <em>&lt;me@example.com&gt;</em>
                            </p>
                        </div>
                    </div>
                    <div className="date-info">
                        <p>17 March 2021, 09:33</p>
                    </div>
                    <div className="icons" onClick={() => alert("Fake buttons. Do not click")}>
                        <ul>
                            <li>
                                <img className="icon" src={backArrow} alt="reply button"/>
                            </li>
                            <li>
                                <img
                                    className="icon"
                                    src={rateStarButton}
                                    alt="star button"
                                />
                            </li>
                            <li>
                                <img
                                    className="icon"
                                    src={rubbishButton}
                                    alt="delete button"
                                />
                            </li>
                        </ul>
                    </div>
                </header>
                <section className="email-body">
                    <div className="content">
                        <img src={flaticonWelcomeImage} alt="Flaticon welcome message"/>
                    </div>
                </section>
                <section className="email-actions">
                    <button>Reply</button>
                    <button>Forward</button>
                </section>
            </div>
        </>
    );
}

export default EmailView;