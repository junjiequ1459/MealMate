import "./GoogleMap.css";
import React, { useEffect, useRef } from "react";

const GoogleMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapContainer.current, {
      zoom: 14,
      center: { lat: 37.7749, lng: -122.4194 },
    });
  }, []);

  return <div ref={mapContainer} style={{ height: "100vh", width: "34vw" }} />;
};

export default GoogleMap;
