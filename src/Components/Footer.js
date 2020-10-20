import React from "react";
import styled from "styled-components";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../redux/actions/app_action";
import { Link } from "react-router-dom";

const FooterCont = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 290px;
  background: #3491c8;
  border-top: 1px solid #ccc;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);

  .footer {
    max-width: 1400px;
    display: flex;
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
    }

    .link {
      transition: 0.4s;
      color: #fff;
      &:hover {
        transition: 0.4s;
        cursor: pointer;
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
`;

const Footer = ({}) => {
  const dispatch = useDispatch();

  return (
    <Media
      queries={{
        small: "(max-width: 729px)",
        large: "(min-width: 730px)",
      }}
    >
      {(size) => (
        <FooterCont size={size}>
          <div className="footer">
            <div
              style={{ display: "flex", width: "100%", margin: "60px 0 0 0" }}
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  margin: "0 0 0 10%",
                  fontSize: "18px",
                  color: "#fff",
                }}
              >
                <img
                  src={require("../images/logowhite.png")}
                  alt="vector"
                  style={{
                    margin: "0 60px 0 0 ",
                  }}
                />
                <div>
                  <div
                    style={{
                      display: "flex",
                      margin: "0 0 20px 0",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/UDS"
                      onClick={() => dispatch(setActivePage("/UDS"))}
                    >
                      <div className="link">Головна</div>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/UDS/CRMConsultant"
                      onClick={() => dispatch(setActivePage("/UDS"))}
                    >
                      <div className="link" style={{ margin: "0 40px" }}>
                        CRM Consultant
                      </div>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/UDS/blog"
                      onClick={() => dispatch(setActivePage("/UDS"))}
                    >
                      <div className="link">Блог</div>
                    </Link>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/UDS/gallery"
                      onClick={() => dispatch(setActivePage("/UDS"))}
                    >
                      <div className="link">Галерея</div>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/UDS/blog"
                      onClick={() =>
                        dispatch(setActivePage("/UDS/CRMDeveloper"))
                      }
                    >
                      <div className="link" style={{ margin: "0 40px" }}>
                        CRM Developer
                      </div>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/UDS/blog"
                      onClick={() => dispatch(setActivePage("/UDS/gallery"))}
                    >
                      <div className="link">Старт курсу</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  margin: "0 0 0 100px",
                }}
              >
                <div className="title-14">
                  Хочеш дізнатися про початок курсів?
                </div>
                <Link to="/UDS/contacts">
                  <button className="footer-btn">НАТИСНИ СЮДИ</button>
                </Link>
              </div>
            </div>
            <div className="text-13">Copyright © 2020 DYNAMICS Education</div>
          </div>
        </FooterCont>
      )}
    </Media>
  );
};

export default Footer;
