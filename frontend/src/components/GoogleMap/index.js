import React, { useEffect, useRef } from "react";
import { useState } from "react";

const GoogleMap = ({ businesses }) => {
  const mapContainer = useRef(null);
  const [center, setCenter] = useState({ lat: 34.4087147, lng: -119.6850187 });

  useEffect(() => {
    const map = new window.google.maps.Map(mapContainer.current, {
      zoom: 12,
      center: center,
    });

    businesses.forEach((business) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: parseFloat(business.latitude),
          lng: parseFloat(business.longitude),
        },
        map: map,
      });
    });
  }, [businesses]);

  return <div ref={mapContainer} style={{ height: "100vh", width: "34vw" }} />;
};

export default GoogleMap;
