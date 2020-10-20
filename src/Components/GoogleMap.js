import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flex: 1,
        width: "100%",
        borderRadius: "25px",
        overflow: "hidden",
        border: "2px solid #C1C9D0",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAQAxwZrSzKnN6VV40oIWWN_1KbSxiZpxE" }}
        defaultCenter={{
          lat: 50.406685700000004,
          lng: 30.508363799999998,
        }}
        defaultZoom={11}
      >
        <img
          src={require("../images/marker.png")}
          alt="marker"
          width={40}
          height={40}
          lat={50.406685700000004}
          lng={30.508363799999998}
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
