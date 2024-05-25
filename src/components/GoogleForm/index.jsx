import React from "react";

const GoogleForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h1>Contact Form</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            repellat asperiores natus unde quos consequuntur aliquid temporibus
            doloremque nihil nulla quidem, expedita hic nobis ipsam quia fugiat.
            Sunt, maxime, fugit!
          </p>

          <div className="popup-overlay">
            <div className="popWindow subscribe_window">
              <p className="subcsribe-text">
                Subscribe to receive news and information
              </p>
              <form className="subscribe-form" autoComplete="off">
                <div>
                  <input
                    type="text"
                    id="name-subscribe"
                    name="Name"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name-subscribe">
                    Name <span>*</span>
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    id="email-subscribe"
                    name="E-mail"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email-subscribe">
                    Email <span>*</span>
                  </label>
                </div>
                <div className="aligncenter">
                  <button type="submit" className="btn">
                    <i className="fa fa-check" aria-hidden="true"></i> Subscribe
                  </button>
                </div>
                <div className="req-fields">
                  <sup>*</sup> required fields
                </div>
              </form>
              <div className="close-btn">&times;</div>
            </div>

            <div className="popWindow thank_you_window">
              <p className="thank_you_title">Thank you for subscribing!</p>
              <p className="thank_you_body">
                We sent some useful tips to your email. Go ahead and check them
                now!
              </p>
              <div className="close-btn">&times;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleForm;
