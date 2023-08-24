import React from "react";

function GoogleMap() {
  return (
    <div>
      {" "}
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.637143351283!2d72.97981847413597!3d33.64064923935425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df970028b1ec2b%3A0x348c164ed5dd5323!2sAeon%20Marketing!5e0!3m2!1sen!2s!4v1692858998096!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default GoogleMap;
