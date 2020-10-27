import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setActivePage } from "../redux/actions/app_action";
import { Link } from "react-router-dom";

const FooterCont = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  min-height: 290px;
  background: #3491c8;
  border-top: 1px solid #ccc;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  position: relative;

  @media (max-width: 600px) {
    min-height: 240px;
  }

  .footer {
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;

    .text-13 {
      width: 100%;
      text-align: center;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      color: #fff;
      margin: 0 0 40px 0;
    }

    .title-14 {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      color: #fff;

      @media (max-width: 1350px) {
        font-size: 18px;
      }
    }

    .link {
      transition: 0.4s;
      color: #fff;
      &:hover {
        transition: 0.4s;
        cursor: pointer;
      }

      @media (max-width: 1350px) {
        font-size: 16px;
      }

      @media (max-width: 1000px) {
        padding: 0 20px;
      }

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
    .footer-btn {
      width: max-content;
      background: #fff;
      border: 1px solid #fff;
      border-radius: 71px;
      color: #3491c8;
      padding: 15px 25px;
      font-weight: bold;
      font-size: 18px;
      margin: 20px 0 0 0;
      transition: 0.3s;

      @media (max-width: 1350px) {
        font-size: 14px;
        padding: 15px;
      }

      @media (max-width: 600px) {
        padding: 15px 25px;
      }

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px rgba(81, 126, 173, 0.8);
        transition: 0.3s;
      }

      &:focus {
        outline: none;
      }
    }
  }
  .footer-cont {
    display: flex;
    width: 100%;
    margin: 60px 0 0 0;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-end;
      margin: 30px 0 0 0;
    }
  }

  .links-cont {
    display: flex;
    flex: 1;
    align-items: center;
    margin: 0 0 0 10%;
    font-size: 18px;
    color: #fff;
    @media (max-width: 1350px) {
      margin: 0 0 0 40px;
    }

    @media (max-width: 1350px) {
      margin: 0 20px;
      width: calc(100% - 40px);
    }
    @media (max-width: 600px) {
      display: none;
    }
  }

  .right-box {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 0 0 100px;

    @media (max-width: 1350px) {
      margin: 0 40px;
      flex: unset;
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      margin: 20px 0;
    }
    @media (max-width: 600px) {
      width: 240px;
      text-align: center;
      margin: 0 20px 0 0;
    }

    @media (max-width: 380px) {
      margin: 0;
    }
  }

  .links-wrapper {
    @media (max-width: 1000px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .links-main-box {
    display: flex;
    margin: 0 0 20px 0;
    @media (max-width: 1000px) {
      width: 600px;
    }
  }

  .sm-logo {
    display: none;

    @media (max-width: 600px) {
      display: flex;
      position: absolute;
      top: 30px;
      left: 20px;
    }
  }
`;

const Footer = ({}) => {
  const dispatch = useDispatch();

  return (
    <FooterCont>
      <div className="footer">
        <div className="footer-cont">
          <div className="links-cont">
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => dispatch(setActivePage("/"))}
            >
              <img
                className="logo"
                src={require("../images/logowhite.png")}
                alt="vector"
                style={{
                  margin: "0 60px 0 0 ",
                }}
              />
            </Link>
            <div className="links-wrapper">
              <div className="links-main-box">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={() => dispatch(setActivePage("/"))}
                >
                  <div className="link">Головна</div>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/CRMConsultant"
                  onClick={() => dispatch(setActivePage("/CRMConsultant"))}
                >
                  <div className="link" style={{ margin: "0 40px" }}>
                    CRM Consultant
                  </div>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/blog"
                  onClick={() => dispatch(setActivePage("/blog"))}
                >
                  <div className="link">Блог</div>
                </Link>
              </div>
              <div className="links-main-box" style={{ margin: "0" }}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/gallery"
                  onClick={() => dispatch(setActivePage("/gallery"))}
                >
                  <div className="link">Галерея</div>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/CRMDeveloper"
                  onClick={() => dispatch(setActivePage("/CRMDeveloper"))}
                >
                  <div className="link" style={{ margin: "0 40px" }}>
                    CRM Developer
                  </div>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/contacts"
                  onClick={() => dispatch(setActivePage("/contacts"))}
                >
                  <div className="link">Старт курсу</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="title-14">Хочеш дізнатися про початок курсів?</div>
            <Link to="/contacts">
              <button
                onClick={() => dispatch(setActivePage("/contacts"))}
                className="footer-btn"
              >
                НАТИСНИ СЮДИ
              </button>
            </Link>
          </div>
        </div>
        <div className="text-13">Copyright © 2020 DYNAMICS Education</div>
      </div>

      <img
        className="sm-logo"
        src={require("../images/logowhite.png")}
        alt="vector"
      />
    </FooterCont>
  );
};

export default Footer;
