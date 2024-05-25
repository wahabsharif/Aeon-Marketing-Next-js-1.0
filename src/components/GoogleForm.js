import React, { useState, useEffect } from "react";

const GoogleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isThankYouVisible, setThankYouVisible] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    e.target.classList.remove("shake"); // Remove shake effect when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty required fields
    let hasError = false;
    Object.keys(formData).forEach((key) => {
      const inputElement = document.querySelector(`[name="${key}"]`);
      if (!formData[key]) {
        inputElement.classList.remove("shake"); // Remove the class to reset the animation
        void inputElement.offsetWidth; // Trigger reflow
        inputElement.classList.add("shake"); // Re-add the class to trigger the animation
        hasError = true;
      }
    });

    if (hasError) {
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Email sent successfully");
        setThankYouMessage("Thank you for subscribing!");
        setThankYouVisible(true);

        setTimeout(() => {
          closePopup();
        }, 3000); // Close after 3 seconds
      } else {
        console.error("Failed to send email");
        setThankYouMessage("Oops! Something went wrong");
        setThankYouVisible(true);
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      setThankYouMessage("Oops! Something went wrong");
      setThankYouVisible(true);
    }
  };

  const closePopup = () => {
    const $popOverlay = document.querySelector(".popup-overlay");
    const $subscribeWindow = document.querySelector(".subscribe_window");
    const $thankYouWindow = document.querySelector(".thank_you_window");

    $popOverlay.style.display = "none";
    $subscribeWindow.style.display = "none";
    $thankYouWindow.style.display = "none";
    setThankYouVisible(false);
  };

  useEffect(() => {
    const $popOverlay = document.querySelector(".popup-overlay");
    const $subscribeWindow = document.querySelector(".subscribe_window");
    const $thankYouWindow = document.querySelector(".thank_you_window");
    const $closeButtons = document.querySelectorAll(".close-btn");

    $popOverlay.style.display = "block";
    $subscribeWindow.style.display = "block";

    $closeButtons.forEach((button) => {
      button.addEventListener("click", closePopup);
    });

    return () => {
      $closeButtons.forEach((button) => {
        button.removeEventListener("click", closePopup);
      });
    };
  }, []);

  useEffect(() => {
    const $thankYouWindow = document.querySelector(".thank_you_window");

    if (isThankYouVisible) {
      $thankYouWindow.style.display = "block";
    } else {
      $thankYouWindow.style.display = "none";
    }
  }, [isThankYouVisible]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="popup-overlay">
            <div className="popWindow subscribe_window">
              <p className="subcsribe-text">
                Subscribe to receive latest news and information
              </p>
              <form onSubmit={handleSubmit} className="subscribe-form">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="aligncenter">
                  <button type="submit" className="btn">
                    Subscribe
                  </button>
                </div>
              </form>
              <div className="close-btn">&times;</div>
            </div>
            <div className="popWindow thank_you_window">
              <p className="thank_you_title">{thankYouMessage}</p>
              <div className="close-btn">&times;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleForm;
