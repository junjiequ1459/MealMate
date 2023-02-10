import React, { useEffect, useRef } from "react";

const GoogleMap = ({ businesses }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapContainer.current, {
      zoom: 14,
      center: { lat: 34.4087147, lng: -119.6850187 },
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
