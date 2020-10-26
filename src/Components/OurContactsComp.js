import React from "react";
import GoogleMap from "./GoogleMap";
import styled from "styled-components";

const ContactComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 100%;
  background: #fff;
  padding: 240px 0 60px 0;

  @media (max-width: 768px) {
    padding: 140px 0 60px 0;
  }

  .info-box {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 40px 20px 100px;

    @media (max-width: 600px) {
      padding: 10px 5%;
    }
  }

  .google-map {
    width: 670px;
    height: 440px;
    margin: 0 0 0 10%;

    @media (max-width: 1350px) {
      width: 600px;
      height: 380px;
      margin: 0 0 0 5%;
    }

    @media (max-width: 1180px) {
      width: 100%;
      height: 380px;
      margin: 0 5%;
    }

    @media (max-width: 600px) {
      width: 100%;
      height: 220px;
      margin: 0 5%;
    }
  }

  .our-contact {
    @media (max-width: 1180px) {
      display: none;
    }
  }

  .our-contact-sm {
    display: none;
    @media (max-width: 1180px) {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 0 0 20px 0;
    }

    @media (max-width: 600px) {
      padding: 0 0 40px 0;
    }
  }

  .img-contact {
    height: 40px;
  }
  .social-img {
    width: 35px;
  }

  .soc-box {
    @media (max-width: 600px) {
      margin: 15px 0 0 0;
    }
  }
`;

const OurContactsComp = () => {
  return (
    <ContactComponent>
      <div className="text-6 our-contact-sm">Наші контакти</div>
      <div className="google-map">
        <GoogleMap />
      </div>
      <div className="info-box">
        <div style={{ textAlign: "left" }} className="text-6 our-contact">
          Наші контакти
        </div>

        <div>
          <div
            style={{
              display: "flex",
              height: "60px",
              alignItems: "center",
            }}
            className="img-contact"
          >
            <img
              src={require("../images/Vector12.png")}
              alt="vector"
              style={{
                margin: "0 30px 0 0",
              }}
            />
            <div
              style={{ fontSize: "18px", textAlign: "left" }}
              className="text-5"
            >
              м. Київ, просп. Лобановського 150
            </div>
          </div>
          <div
            style={{
              display: "flex",
              height: "60px",
              alignItems: "center",
            }}
            className="img-contact"
          >
            <img
              src={require("../images/Vector13.png")}
              alt="vector"
              style={{
                margin: "0 30px 0 0",
              }}
            />
            <div
              style={{ fontSize: "18px", textAlign: "left" }}
              className="text-5"
            >
              Графік роботи: Пн-П 8:00-19:00
            </div>
          </div>
          <div
            style={{
              display: "flex",
              height: "60px",
              alignItems: "center",
            }}
            className="img-contact"
          >
            <img
              src={require("../images/Vector14.png")}
              alt="vector"
              style={{
                margin: "0 30px 0 0",
              }}
            />
            <div
              style={{ fontSize: "18px", textAlign: "left" }}
              className="text-5"
            >
              +38 (063) 146 92 46
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }} className="soc-box">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
            href="https://www.facebook.com/UDS.systems/"
          >
            <img
              className="social-img"
              src={require("../images/Vector15.png")}
              alt="vector"
            />
          </a>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              margin: "0 40px",
            }}
            href="https://www.instagram.com/udsconsulting/"
          >
            <img
              className="social-img"
              src={require("../images/instagram.png")}
              alt="vector"
            />
          </a>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
            href="https://www.linkedin.com/company/uds-systems/"
          >
            <img
              className="social-img"
              src={require("../images/Vector17.png")}
              alt="vector"
            />
          </a>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              margin: "0 0 0 40px",
            }}
            href="https://www.youtube.com/channel/UCx443BQ2U4gGXLPYB8Nu3bg"
          >
            <img
              className="social-img"
              src={require("../images/Vector18.png")}
              alt="vector"
            />
          </a>
        </div>
      </div>
      <img
        src={require("../images/Vector10.png")}
        alt="vector"
        style={{
          position: "absolute",
          top: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        className="line-6"
      />
    </ContactComponent>
  );
};

export default OurContactsComp;
