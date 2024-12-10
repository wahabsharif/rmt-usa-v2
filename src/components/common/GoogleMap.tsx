import React from "react";

function GoogleMap() {
  return (
    <div style={{ filter: "grayscale(100%)" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.7403350159775!2d-81.29262682578872!3d28.36669909610513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd89b6a6b3e301%3A0x5ec4cb93ba410e95!2sGuideWell%20Innovation%20Center!5e0!3m2!1sen!2s!4v1732873113996!5m2!1sen!2s"
        width="100%"
        height="450"
        loading="lazy"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default GoogleMap;
