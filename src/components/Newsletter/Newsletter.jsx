import "./newsletter.css";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [emailBanner, setEmailBanner] = useState("");
  // const [subscribeText, setSubscribeText] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setEmailBanner(email);
    setEmail("");
    // setSubscribeText(!subscribeText);
    // console.log(email);
  };

  return (
    <div className="newsletter-container">
      <p className="newsletter-heading">Newsletter</p>
      <p className="newsletter-text">
        Subscribe below to get information on latest trends in your mailbox.
      </p>
      <div className="input-wrapper">
        <form className="newsletter-input-box" onSubmit={submitHandler}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email here.."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
      {emailBanner && (
        <p className="email-subscribed-text">
          <span className="subscribe-email">{emailBanner}</span> has been added
          to the Subscription List.
        </p>
      )}
    </div>
  );
};

export default Newsletter;
