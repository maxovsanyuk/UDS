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
  height: 80px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0 1px 0;
  ${({ fixed }) =>
    fixed &&
    "width: 100%; position: fixed; top: 0; z-index: 1000; background: #fff; animation: appearingComp .5s ease-in-out 0s 1 normal forwards;"}

  .logo {
    opacity: 0;
    animation: appearingComp 1s ease-in-out 0s 1 normal forwards;

    @keyframes appearingComp {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .header-cont {
    height: 100%;
    width: 1360px;
    padding: 0 20px;
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
      background: #ffca62;
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
      padding: 0 30px;
      margin: 0 10px;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      text-decoration: none;
      color: #262626;
      font-size: 18px;
      transition: 0.2s;
      text-align: center;

      @media (max-width: 1200px) {
        font-size: 14px;
        padding: 0 10px;
      }

      @media (max-width: 900px) {
        font-size: 12px;
        padding: 0 5px;
      }

      &:hover {
        .border-line {
          display: flex;
        }
        transition: 0.2s;
      }
    }
  }

  .start-course-btn {
    background: linear-gradient(0deg, #ffffff, #ffffff);
    border-radius: 40px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.06em;
    padding: 12px 24px;
    text-transform: uppercase;
    color: #4e7baa;
    border: 1px solid #4e7baa;
    transition: 0.2s;

    @media (max-width: 1200px) {
      font-size: 14px;
    }

    @media (max-width: 900px) {
      font-size: 12px;
      padding: 6px 12px;
    }

    &:hover {
      transition: 0.2s;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(81, 126, 173, 0.15);
    }

    :focus {
      outline: none;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  position: relative;
  align-items: center;
  width: 100vw;
  max-height: 80px;
  .logo {
    margin: 10px 15px;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 40px);
    background: #dde7f0;
    animation: border 0.3s ease-in-out 0s 1 normal forwards;
    position: absolute;
    top: 70px;
    left: 0;
    z-index: 200;
    padding: 40px 0 0 0;
  }

  .page {
    padding: 20px 0;
    text-decoration: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #09051f;
    width: auto;
    &:hover {
      transition: 0.4s;
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
  .start-course-btn {
    background: linear-gradient(0deg, #ffffff, #ffffff);
    border-radius: 40px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    padding: 12px 24px;
    text-transform: uppercase;
    color: #4e7baa;
    border: 1px solid #4e7baa;
    transition: 0.2s;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.06em;
    text-transform: uppercase;

    &:hover {
      transition: 0.2s;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(81, 126, 173, 0.15);
    }

    :focus {
      outline: none;
    }
  }
`;

const pages = [
  { name: "Головна", patch: "/" },
  { name: "CRM Developer", patch: "/CRMDeveloper" },
  { name: "CRM Consultant", patch: "/CRMConsultant" },
  { name: "Галерея", patch: "/gallery" },
  { name: "Блог", patch: "/blog" },
];

const Header = () => {
  const [offset, setOffset] = useState(0);
  const [isMenuOpen, setIsMtnuOpen] = useState(false);
  const state = useSelector((state) => state.app);
  const { activePage } = state;

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
              <Link to="/" onClick={() => dispatch(setActivePage("/"))}>
                <img
                  className="logo"
                  src={require("../images/Logo_School.png")}
                  alt="logo"
                />
              </Link>

              <Link to="/contacts">
                <button className="start-course-btn">Старт Курсу</button>
              </Link>

              <HamburgerMenu
                isOpen={isMenuOpen}
                menuClicked={() => {
                  setIsMtnuOpen(!isMenuOpen);
                  document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
                }}
                width={36}
                height={30}
                strokeWidth={2}
                rotate={0}
                color="#4E7BAA"
                borderRadius={0}
                animationDuration={0.5}
                className="menu-btn"
              />

              {isMenuOpen && (
                <div className="menu-items">
                  {[...pages, { name: "Старт курсу", patch: "/contacts" }].map(
                    ({ name, patch, hideBorder }) => (
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
              <div className="header-cont">
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(setActivePage("/"));
                  }}
                >
                  <img
                    className="logo"
                    src={require("../images/Logo_School.png")}
                    alt="logo"
                  />
                </Link>
                <div style={{ display: "flex", height: "100%" }}>
                  {pages.map(({ name, patch }) => (
                    <Link
                      onClick={() => {
                        dispatch(setActivePage(patch));
                        window.scrollTo(0, 0);
                      }}
                      className="links"
                      key={name}
                      to={patch}
                    >
                      {name}

                      <div
                        className="border-line"
                        style={{ display: activePage === patch && "flex" }}
                      />
                    </Link>
                  ))}
                </div>

                <Link to="/contacts">
                  <button className="start-course-btn">Старт Курсу</button>
                </Link>
              </div>
            </HeaderBox>
          )}
        </>
      )}
    </Media>
  );
};

export default Header;
