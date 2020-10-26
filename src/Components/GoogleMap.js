import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const GM = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
  border: 2px solid #c1c9d0;
`;

const GoogleMap = () => {
  return (
    <GM>
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
    </GM>
  );
};

export default GoogleMap;
