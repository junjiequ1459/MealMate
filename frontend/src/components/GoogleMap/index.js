import React, { useEffect, useRef, useMemo, useState } from "react";
import { GoogleMap as Map, LoadScript } from "@react-google-maps/api";

const GoogleMap = ({ businesses }) => {
  const center = useMemo(() => {
    return { lat: 34.4144445, lng: -119.6906718 };
  }, []);

  const [businessesId, setBusinessesId] = useState("");

  useEffect(() => {
    setBusinessesId(Date.now().toString());
  }, [businesses]);

  const onLoad = (map) => {
    businesses.forEach((business, i) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: parseFloat(business.latitude),
          lng: parseFloat(business.longitude),
        },
        label: {
          text: (i + 1).toString(),
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
        },
        map: map,
      });
    });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <Map
        key={businessesId}
        mapContainerStyle={{ height: "100vh", width: "34vw" }}
        zoom={13}
        center={center}
        onLoad={onLoad}
      />
    </LoadScript>
  );
};

export default GoogleMap;
