import React from "react";
import styled from "styled-components";

const ContactComponent = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  background: #fff;
  max-width: 1400px;
  padding: 240px 0 60px 0;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

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

  .text-5 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #09051f;

    @media (max-width: 1000px) {
      font-size: 16px !important;
    }

    @media (max-width: 768px) {
      font-size: 14px !important;
      text-align: center;
      width: 100% !important;
    }
  }

  .google-map {
    width: 670px;
    height: 440px;
    border: 2px solid #c1c9d0;
    border-radius: 25px;
    margin: 0 0 0 10%;
    overflow: hidden;
    background-size: 150% !important;

    @media (max-width: 1350px) {
      width: 600px;
      height: 380px;
      margin: 0 0 0 5%;
    }

    @media (max-width: 1200px) {
      margin: 0 auto;
    }

    @media (max-width: 700px) {
      width: 90%;
      margin: 0 5%;
      height: 340px;
    }

    @media (max-width: 500px) {
      height: 240px;
    }
  }

  .our-contact {
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .our-contact-sm {
    display: none;
    @media (max-width: 1200px) {
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
  .text-6 {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;
    color: #3491c8;
    position: relative;
    z-index: 10;

    @media (max-width: 900px) {
      font-size: 34px;
    }

    @media (max-width: 768px) {
      margin: 40px 0 60px 0 !important;
    }
    @media (max-width: 600px) {
      font-size: 24px;
      margin: 0 !important;
      line-height: 22px;
    }
  }
`;

const OurContactsComp = ({ hideLine, style }) => {
  return (
    <ContactComponent style={style}>
      <div className="text-6 our-contact-sm">Наші контакти</div>
      <div
        className="google-map"
        style={{
          background: `url(${require("../images/map2.png")})no-repeat center`,
        }}
      />
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
              Графік роботи: пн-пт 8:00-19:00
            </div>
          </div>
          <a
            style={{
              display: "flex",
              height: "60px",
              alignItems: "center",
              textDecoration: "none",
            }}
            className="img-contact"
            href="tel:+38-063-146-92-46"
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
          </a>
        </div>
        <div style={{ display: "flex" }} className="soc-box">
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
            href="https://www.facebook.com/UDS.systems/"
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
      {!hideLine && (
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
      )}
    </ContactComponent>
  );
};

export default OurContactsComp;
