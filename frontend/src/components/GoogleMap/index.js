import React, { useEffect, useRef, useMemo } from "react";

const GoogleMap = ({ businesses }) => {
  const mapContainer = useRef(null);
  const center = useMemo(() => {
    return { lat: 34.4144445, lng: -119.6906718 };
  }, []);
  useEffect(() => {
    const map = new window.google.maps.Map(mapContainer.current, {
      zoom: 13,
      center: center,
    });

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
      marker.addListener("mouseover", () => {
        marker.setLabel({
          text: (i + 1).toString(),
          color: "red",
          fontSize: "16px",
          fontWeight: "bold",
        });
      });

      marker.addListener("mouseout", () => {
        marker.setLabel({
          text: (i + 1).toString(),
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
        });
      });
    });
  }, [businesses, center]);

  return <div ref={mapContainer} style={{ height: "100vh", width: "34vw" }} />;
};

export default GoogleMap;
