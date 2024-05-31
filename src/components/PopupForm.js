import React, { useState, useEffect, useCallback } from "react";

const PopupForm = () => {
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

    if (hasError) return;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setThankYouMessage("Thank you for subscribing!");
      } else {
        setThankYouMessage("Oops! Something went wrong");
      }

      setThankYouVisible(true);
      setTimeout(closePopup, 3000);
    } catch (error) {
      console.error("Error sending form data:", error);
      setThankYouMessage("Oops! Something went wrong");
      setThankYouVisible(true);
    }
  };

  const closePopup = useCallback(() => {
    const $popOverlay = document.querySelector(".popup-overlay");
    const $subscribeWindow = document.querySelector(".subscribe_window");
    const $thankYouWindow = document.querySelector(".thank_you_window");

    if ($popOverlay) $popOverlay.style.display = "none";
    if ($subscribeWindow) $subscribeWindow.style.display = "none";
    if ($thankYouWindow) $thankYouWindow.style.display = "none";
    setThankYouVisible(false);
  }, []);

  useEffect(() => {
    const showPopup = () => {
      console.log("Window loaded. Showing popup...");
      setTimeout(() => {
        const $popOverlay = document.querySelector(".popup-overlay");
        const $subscribeWindow = document.querySelector(".subscribe_window");

        if ($popOverlay) {
          console.log("Showing popup overlay");
          $popOverlay.style.display = "block";
        }
        if ($subscribeWindow) {
          console.log("Showing subscribe window");
          $subscribeWindow.style.display = "block";
        }
      }, 3000);
    };

    window.addEventListener("load", showPopup);

    return () => {
      window.removeEventListener("load", showPopup);
    };
  }, []);

  useEffect(() => {
    const $thankYouWindow = document.querySelector(".thank_you_window");
    if ($thankYouWindow) {
      $thankYouWindow.style.display = isThankYouVisible ? "block" : "none";
    }
  }, [isThankYouVisible]);

  useEffect(() => {
    const $closeButtons = document.querySelectorAll(".close-btn");

    $closeButtons.forEach((button) => {
      button.addEventListener("click", closePopup);
    });

    return () => {
      $closeButtons.forEach((button) => {
        button.removeEventListener("click", closePopup);
      });
    };
  }, [closePopup]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="popup-overlay" style={{ display: "none" }}>
            <div
              className="popWindow subscribe_window"
              style={{ display: "none" }}
            >
              <p className="subcsribe-text">Get latest news</p>
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
            <div
              className="popWindow thank_you_window"
              style={{ display: "none" }}
            >
              <p className="thank_you_title">{thankYouMessage}</p>
              <div className="close-btn">&times;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
