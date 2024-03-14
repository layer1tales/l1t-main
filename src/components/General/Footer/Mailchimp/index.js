import React, {useState, useMemo} from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import formSumbitIcon from "assets/img/general/form-submit-icon.svg";

const CustomForm = ({status, onValidated}) => {
    const [isBtnWithText, setIsBtnWithText] = useState(false);
    let email;

    const submitSubscription = () => {
        setIsBtnWithText(true);
        return email && email.value.indexOf("@") > -1 && onValidated({EMAIL: email.value});
    };

    const isEmailSent = useMemo(() => status === 'success', [status]);
    const isError = useMemo(() => status === 'error', [status]);

    return (
        <div className="form-group">
            <input ref={node => (email = node)}
                   type="email" placeholder="EMAIL ADDRESS"
                   className="form-control"
                   required/>
            <button
                className={`${(isEmailSent || isError) ? 'disabled' : ''} ${isBtnWithText ? 'with-text' : ''}`}
                disabled={isEmailSent || isError}
                aria-disabled={isEmailSent || isError}
                onClick={submitSubscription}
            >
                {isBtnWithText ? (
                    <span className="text">
                        {isEmailSent
                            ? 'Sent'
                            : isError
                                ? 'Error'
                                : 'Sending'
                        }
                    </span>
                ) : (
                    <span className="arrow">
                        <img src={formSumbitIcon} alt="Arrow icon"/>
                    </span>
                )}
            </button>
        </div>
    );
};

const MailchimpForm = () => {
    const url = "https://factorbased.us17.list-manage.com/subscribe/post?u=2e06adf3eca76aee4a5567024&id=5ec57c3dde";

    return (
        <MailchimpSubscribe
            url={url}
            render={({subscribe, status, message}) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    );
}

export default MailchimpForm;
