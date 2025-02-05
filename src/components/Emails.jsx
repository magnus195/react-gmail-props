import Email from "./Email.jsx";

function Emails(props) {
    return (
        <ul>
            {props.emails.map((email, i) => (
                <Email key={i} email={email} toggleStar={props.toggleStar} toggleRead={props.toggleRead}
                       selectEmail={() => props.selectEmail(email)}/>
            ))
            }
        </ul>
    );
}

export default Emails;