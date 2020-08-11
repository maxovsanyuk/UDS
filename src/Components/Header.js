import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../redux/actions/app_action";
import Media from "react-media";
import HamburgerMenu from "react-hamburger-menu";

const HeaderBox = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0 1px 0;
  ${({ fixed }) =>
    fixed &&
    "width: 100%; position: fixed; top: 0; z-index: 100; background: #fff; animation: appearingComp .5s ease-in-out 0s 1 normal forwards;"}

  .logo {
    opacity: 0;
    animation: appearingComp 1s ease-in-out 0s 1 normal forwards;
    margin: 0 30px 0 40px;

    @keyframes appearingComp {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .links-cont {
    height: 100%;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;

    .border-line {
      height: 2px;
      width: 100%;
      display: none;
      position: absolute;
      bottom: -1px;
      background: #0067b8;
      animation: border 0.3s ease-in-out 0s 1 normal forwards;

      @keyframes border {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
    }

    .links {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      text-decoration: none;
      color: #262626;
      font-size: 13px;
      transition: 0.2s;
      text-align: center;
    }
    .anable-hover-color {
      &:hover {
        .border-line {
          display: flex;
        }
        background: #e9e9e9;
        color: #0067b8;
        transition: 0.2s;
      }
    }

    .disable-hover-color {
      &:hover {
        .border-line {
          display: flex;
        }
        transition: 0.2s;
      }
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  max-height: 80px;

  .logo {
    margin: 5px;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.85);
    animation: border 0.3s ease-in-out 0s 1 normal forwards;
    position: absolute;
    top: 55px;
    left: 0;
    z-index: 20;
  }

  .page {
    font-size: 26px;
    text-align: center;
    padding: 20px 0;
    text-decoration: none;
    background: #0067b8;
    border-bottom: 1px solid #fff;
    transition: 0.4s;
    color: #fff;
    &:hover {
      transition: 0.4s;
      background: #fff;
      color: #0067b8;
    }
  }

  .menu-btn {
    margin: 10px;
    &:hover {
      cursor: pointer;
    }
  }

  @keyframes appearingMenu {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const pages = [
  { name: "Головна", patch: "/UDS" },
  { name: "CRM Developer", patch: "/UDS/CRMDeveloper" },
  { name: "CRM Consultant", patch: "/UDS/CRMConsultant" },
  { name: "Галерея", patch: "/UDS/gallery" },
  { name: "Блог", patch: "/UDS/blog" },
  {
    name: "Старт курсу",
    patch: "/UDS/contacts",
    bgColor: "aliceblue",
    showLogo: true,
    hideBorder: true,
  },
];

const Header = () => {
  const [offset, setOffset] = useState(0);
  const [isMenuOpen, setIsMtnuOpen] = useState(false);
  const state = useSelector((state) => state.app);
  const { activePage } = state;

  console.log(activePage, "activePage");

  const dispatch = useDispatch();

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <Media
      queries={{
        small: "(max-width: 729px)",
        large: "(min-width: 730px)",
      }}
    >
      {(size) => (
        <>
          {size.small && (
            <Menu>
              <Link to="/UDS" onClick={() => dispatch(setActivePage("/UDS"))}>
                <img
                  className="logo"
                  src={require("../images/Logo_School.png")}
                  alt="logo"
                />
              </Link>

              <HamburgerMenu
                isOpen={isMenuOpen}
                menuClicked={() => {
                  setIsMtnuOpen(!isMenuOpen);
                  document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
                }}
                width={36}
                height={30}
                strokeWidth={1}
                rotate={0}
                color="black"
                borderRadius={0}
                animationDuration={0.5}
                className="menu-btn"
              />

              {isMenuOpen && (
                <div className="menu-items">
                  {pages.map(
                    ({ name, patch, bgColor, showLogo, hideBorder }) => (
                      <Link
                        onClick={() => dispatch(setActivePage(patch))}
                        className="page"
                        key={name}
                        to={patch}
                        style={{ border: hideBorder && "none" }}
                      >
                        {name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </Menu>
          )}

          {size.large && (
            <HeaderBox fixed={offset > 800}>
              <div className="links-cont">
                <Link
                  to="/UDS"
                  onClick={() => {
                    dispatch(setActivePage("/UDS"));
                  }}
                >
                  <img
                    className="logo"
                    src={require("../images/Logo_School.png")}
                    alt="logo"
                  />
                </Link>

                {pages.map(({ name, patch, bgColor, showLogo }) => (
                  <Link
                    onClick={() => {
                      dispatch(setActivePage(patch));
                      window.scrollTo(0, 0);
                    }}
                    style={{
                      background: bgColor,
                    }}
                    className={`links  ${
                      bgColor ? "disable-hover-color" : "anable-hover-color"
                    } `}
                    key={name}
                    to={patch}
                  >
                    {name}

                    {showLogo && (
                      <img
                        width={25}
                        height={25}
                        style={{ margin: "0 0 0 15px" }}
                        src={require("../images/logo-m.jpg")}
                        alt="logo"
                      />
                    )}
                    <div
                      className="border-line"
                      style={{ display: activePage === patch && "flex" }}
                    />
                  </Link>
                ))}
              </div>
            </HeaderBox>
          )}
        </>
      )}
    </Media>
  );
};

export default Header;
