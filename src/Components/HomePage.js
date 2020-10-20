import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import SimpleSlider from "./SimpleSlider";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { setActivePage } from "../redux/actions/app_action";
import { useDispatch } from "react-redux";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  overflow: auto;
  font-family: Montserrat;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    margin: 40px 0 0 0;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 10px 0 20px 0;
      color: #0067b8;
      font-size: 22px;
    }

    .animation {
      width: 300px;
      height: 180px;
      border: 1px solid #0067b8;
      margin: 0 0 20px 0;
    }

    .text-block {
      display: flex;
      align-items: center;
      margin: 0 0 15px 160px;
      font-size: 16px;

      &:last-child {
        font-weight: 600;
      }
    }

    .new-programm {
      animation: newProgramm 0.8s ease-in-out 0.5s 1 normal forwards;
      visibility: hidden;

      @keyframes newProgramm {
        0% {
          opacity: 0;
          transform: scale3d(0, 0, 1);
          visibility: visible;
        }
        100% {
          opacity: 1;
          transform: scale3d(1, 1, 1) rotate(360deg);
          visibility: visible;
        }
      }
    }

    .register-btn {
      background: linear-gradient(
          180deg,
          #3697d1 0%,
          rgba(29, 73, 103, 0.29) 100%
        ),
        #5689b4;
      border-radius: 40px;
      border: none;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      box-shadow: 0 4px 14px rgba(81, 126, 173, 0.2);
      color: #fff;
      padding: 25px 50px;
      margin: 40px 0 0 0;
      transition: 0.3s;

      &:hover {
        transition: 0.3s;
        cursor: pointer;
        box-shadow: 0 0 20px rgba(81, 126, 173, 0.8);
      }

      &:active {
        background: #ccc;
      }

      &:focus {
        outline: none;
      }
    }

    .detail-btn {
      background: #fff;
      border-radius: 50px;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #3491c8;
      padding: 20px 40px;
      border: 0.4px solid #3491c8;
      text-decoration: none;
      transition: 0.4s;

      &:hover {
        transition: 0.4s;
        cursor: pointer;
        box-shadow: 3px 4px 14px rgba(81, 126, 173, 0.6);
      }

      &:active {
        background: #ccc;
      }

      &:focus {
        outline: none;
      }
    }

    .card-wrapper {
      transition: 0.5s;
      &:hover {
        cursor: pointer;
        .education-title {
          transition: 0.5s;
          color: #0067b8;
        }
      }
    }

    .card {
      width: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      transition: 0.5s;
      position: relative;

      &:hover {
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
      }
    }

    .education-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 20px;
    }

    .education-title {
      text-align: center;
      color: rgba(0, 0, 0, 0.8);
      margin: 0 0 20px 0;
      font-size: 18px;
      font-weight: 600;
      transition: 0.4s;
    }

    .stydents-review-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      background: #f5f5f5;
      border-radius: 2px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
      animation: appearingReviewBox 0.8s ease-in-out 0s 1 normal forwards;

      @keyframes appearingReviewBox {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      .student-name {
        color: rgba(0, 0, 0, 0.8);
        font-size: 20px;
        font-weight: 500;
        margin: 10px 0 0 0;
      }

      .student-review {
        height: 150px;
        overflow: auto;
        padding: 30px 50px 50px 50px;
        font-size: 18px;
        line-height: 1.5;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .slider-arrow {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .text-1 {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 130%;
    color: #09051f;
  }

  .text-2 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 135%;
    color: #09051f;
  }

  .text-3 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 130%;
    margin: 20px 0 0 0;
    color: #100a2e;
  }

  .text-4 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 140%;
    margin: 0 0 30px 0;
    color: #3491c8;
  }

  .text-5 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #09051f;
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
  }

  .text-7 {
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #09051f;
  }

  .text-8 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #000;
  }

  .education-content {
    display: flex;
    flex-wrap: wrap;
    max-width: 1141px;
    width: 80%;
    height: 480px;
    background: #fff;
    border: 2px solid #4e7baa;
    border-radius: 25px;
    margin: 40px 0 0 0;
    padding: 10px;
  }
`;

const HomePage = ({}) => {
  const [slideToShow, setSlideToShow] = useState(1);

  const dispatch = useDispatch();
  document.body.style.overflow = "auto";

  return (
    <div>
      <Header />
      <Home>
        <div className="content">
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
              <img
                style={{
                  margin: "0px 0px 12px 43px",
                  position: "relative",
                  zIndex: 10,
                }}
                src={require("../images/Main_Logo.png")}
                alt="vector"
              />
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                background: `url(${require("../images/Back1.png")})no-repeat center 50px`,
              }}
            >
              <div style={{ width: "460px" }}>
                <div className="text-1">Dynamics Education –</div>
                <div className="text-2">
                  це курси для тих, хто хоче проявити себе в ІТ.
                </div>
                <div className="text-3">
                  Ми готуємо кваліфікованих спеціалістів починаючи з 2016 року.
                </div>
                <Link to="/UDS/contacts">
                  <button className="register-btn">Зареєструватись</button>
                </Link>
              </div>
            </div>

            <img
              src={require("../images/Vector.png")}
              alt="vector"
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              padding: "40px 0 0 0 ",
              background:
                "linear-gradient(180deg, #DDE7F0 10.29%, #F2F5F8 46.36%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "600px" }}>
                <div className="text-4">Тоді тобі до нас якщо:</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{ margin: "0 15px 0 0 " }}
                    src={require("../images/Star11.png")}
                    alt="star"
                  />
                  <div className="text-5">
                    Ти <b>молодий спеціаліст</b> з технічним бекграундом та
                    знанням англійської мови?
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <img
                    style={{ margin: "0 15px 0 0 " }}
                    src={require("../images/Star11.png")}
                    alt="star"
                  />
                  <div className="text-5">
                    Ти хочешь отримувати <b>зарплату европейського рівня</b>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{ margin: "0 15px 0 0 " }}
                    src={require("../images/Star11.png")}
                    alt="star"
                  />
                  <div className="text-5">
                    В тебе <b>немає досвіду роботи</b>
                  </div>
                </div>

                <Link to="/UDS/contacts">
                  <button
                    style={{ margin: "60px 0 0 0" }}
                    className="register-btn"
                  >
                    Хочу спробувати
                  </button>
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
              <img
                style={{
                  margin: "0 0 15px 0",
                  position: "relative",
                  zIndex: 10,
                }}
                src={require("../images/Ill_Bonus_1.png")}
                alt="vector"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              position: "relative",
              overflow: "hidden",
              padding: "0 0 200px 0",
            }}
          >
            <div style={{ margin: "200px 0 50px 0" }} className="text-6">
              Кого ми готуємо?
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                position: "relative",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={require("../images/Developer.png")} alt="Developer" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "300px",
                  }}
                >
                  <div style={{ margin: "20px 0 0 0 " }} className="text-7">
                    MS Dynamics CRM Developer
                  </div>
                  <Link to="/UDS/CRMDeveloper">
                    <button
                      style={{ margin: "20px 0 0 0" }}
                      className="detail-btn"
                      onClick={() => {
                        dispatch(setActivePage("/UDS/CRMDeveloper"));
                        window.scrollTo(0, 0);
                      }}
                    >
                      Детальніше
                    </button>
                  </Link>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={require("../images/Consult.png")} alt="Consult" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "300px",
                  }}
                >
                  <div style={{ margin: "30px 0 0 0" }} className="text-7">
                    MS Dynamics CRM Consultant
                  </div>
                  <Link to="/UDS/CRMConsultant">
                    <button
                      style={{ margin: "30px 0 0 0" }}
                      className="detail-btn"
                      onClick={() => {
                        dispatch(setActivePage("/UDS/CRMConsultant"));
                        window.scrollTo(0, 0);
                      }}
                    >
                      Детальніше
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <img
              src={require("../images/Vector2.png")}
              alt="vector"
              style={{
                position: "absolute",
                top: "-150px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            <img
              src={require("../images/Vector3.png")}
              alt="vector"
              style={{
                position: "absolute",
                bottom: "-80px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              transform: "matrix(1, 0, 0, -1, 0, 0)",
              background:
                "linear-gradient(180deg, #DDE7F0 10.96%, #F2F5F8 49.11%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "100px 0 50px 0",
                transform: "rotateX(180deg)",
              }}
              className="text-6"
            >
              Навчальна платформа
              <div className="education-content">
                <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>
                  {[
                    { iconPath: "Icons8.png", text: "Marketing" },
                    { iconPath: "Icons2.png", text: "Customer insights" },
                    { iconPath: "Icons3.png", text: "Retail" },
                    {
                      iconPath: "Icons0.png",
                      text: "Project service automation",
                    },
                  ].map(({ iconPath, text }) => {
                    return (
                      <div
                        key={iconPath}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "50%",
                          height: "50%",
                        }}
                      >
                        <img
                          style={{ width: "max-content" }}
                          src={require(`../images/${iconPath}`)}
                          alt="icon"
                        />
                        <div
                          style={{ margin: "15px 0 0 0", height: "70px" }}
                          className="text-8"
                        >
                          {text}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    background: `url(${require("../images/Back2.png")})no-repeat center`,
                  }}
                >
                  <div
                    className="text-4"
                    style={{
                      width: "250px",
                      textAlign: "center",
                      margin: "0 0 0 40px",
                    }}
                  >
                    Microsoft Dynamics 365
                  </div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>
                  <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>
                    {[
                      { iconPath: "Icons5.png", text: "Customer service" },
                      { iconPath: "Icons4.png", text: "Field service" },
                      { iconPath: "Icons6.png", text: "Sales" },
                      {
                        iconPath: "Icons1.png",
                        text: "Finance and operations",
                      },
                    ].map(({ iconPath, text }) => {
                      return (
                        <div
                          key={iconPath}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "50%",
                            height: "50%",
                          }}
                        >
                          <img
                            style={{ width: "max-content" }}
                            src={require(`../images/${iconPath}`)}
                            alt="icon"
                          />
                          <div
                            style={{ margin: "15px 0 0 0", height: "70px" }}
                            className="text-8"
                          >
                            {text}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          ''''''''''
          <div
            style={{
              width: "calc(100% - 40px)",
              background: "#f5f5f5",
              margin: "0 0 20px 0",
              padding: "20px",
            }}
          >
            <h2 className="title" style={{ margin: "10px 0 20px 0" }}>
              Dynamics Education –
            </h2>

            <div style={{ width: "100%" }}></div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "calc(100% - 40px)",
              margin: "0 0 20px 0",
            }}
          >
            <h2 className="title" style={{ margin: "10px 0  20px 0" }}>
              Кого ми готуємо?
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0 0 10px 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {[
                    {
                      title: "MS Dynamics CRM Developer",
                      patch: "/UDS/CRMDeveloper",
                    },
                    {
                      title: "MS Dynamics CRM Consultant",
                      patch: "/UDS/CRMConsultant",
                    },
                  ].map(({ patch, title }) => {
                    return (
                      <div key={title} className="education-box">
                        <div className="animation" />
                        <div className="education-title">{title}</div>
                        <Link
                          to={patch}
                          onClick={() => {
                            dispatch(setActivePage(patch));
                            window.scrollTo(0, 0);
                          }}
                          className="detail-btn"
                        >
                          Детальніше
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "column",
              background: "#f5f5f5",
              justifyContent: "space-around",
              padding: "20px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 className="title">Навчальна платформа</h2>
              <a href="https://dynamics.microsoft.com/ru-ru/">
                <img
                  className="new-programm"
                  src={require("../images/New.png")}
                  alt="new-programm"
                  width={520}
                  height={340}
                />
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "40px 0 0 0",
            }}
          >
            <div style={{ margin: "0 20px" }} className="card-wrapper">
              <div className="card">
                <img
                  width={300}
                  height={200}
                  src={require("../images/distance.jpg")}
                  alt="distance"
                />
              </div>
              <div
                className="education-title"
                style={{ margin: "20px 20px 0 20px" }}
              >
                Дистанційне навчання <br /> у зручний для вас час
              </div>
            </div>
            <div style={{ margin: "0 20px" }} className="card-wrapper">
              <div className="card">
                <img
                  width={300}
                  height={200}
                  src={require("../images/diplom-300-na-200.png")}
                  alt="distance"
                />
              </div>

              <div
                className="education-title"
                style={{ margin: "20px 20px 0 20px" }}
              >
                По закінченню курсу <br /> видається сертифікат
              </div>
            </div>

            <div style={{ margin: "0 20px" }} className="card-wrapper">
              <div className="card">
                <img
                  width={300}
                  height={200}
                  src={require("../images/pratsevlashtuv-300-na-200.png")}
                  alt="distance"
                />
              </div>
              <div
                className="education-title"
                style={{ margin: "20px 20px 0 20px" }}
              >
                Працевлаштування та <br /> практична підготовка
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              background: "#f5f5f5",
              margin: "30px 0 0 0",
            }}
          >
            <h2 className="title" style={{ margin: "40px 0 0 0" }}>
              Наше співробітництво з UDS
            </h2>
            <SimpleSlider
              style={{ height: "100%", width: "100%", margin: "50px 0" }}
            />
          </div>
          <div
            style={{
              width: "100%",
              margin: "25px 0",
            }}
          >
            <h2 className="title" style={{ margin: "10px 0" }}>
              Відгуки наших студентів:
            </h2>

            <div
              style={{
                width: "100%",
                height: "470px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../images/arrow.png")}
                width={50}
                height={50}
                alt="arrow"
                style={{
                  transform: "rotate(180deg)",
                  visibility: slideToShow === 1 ? "hidden" : "visible",
                }}
                className="slider-arrow"
                onClick={() =>
                  setSlideToShow(slideToShow === 1 ? 1 : slideToShow - 1)
                }
              />
              <div
                className="stydents-review-box"
                style={{ display: slideToShow === 1 ? "flex" : "none" }}
              >
                <img
                  width={80}
                  height={80}
                  src="http://dynamics.net.ua/wp-content/uploads/nizdropa2.png"
                  alt="photo"
                  style={{ borderRadius: "50%", margin: "20px 0 15px 0" }}
                />
                <span className="student-name">Ніздропа Тетяна</span>

                <p className="student-review">
                  "Цей курс дав мені набагато більше, ніж просто теоретичні
                  знання в області Microsoft Dynamics CRM. Він познайомив мене з
                  новими цікавими людьми, надихнув мене на нові цілі та дав
                  можливість працювати у дивовижній команді. Мені все
                  сподобалося, особливо те, як пояснювалися теми. У мене тільки
                  позитивні емоції: гарна атмосфера, смачна кава та різноманітні
                  смаколики. Цей навчальний курс був на високому рівні!"
                </p>
              </div>
              <div
                className="stydents-review-box"
                style={{ display: slideToShow === 2 ? "flex" : "none" }}
              >
                <img
                  width={80}
                  height={80}
                  src="http://dynamics.net.ua/wp-content/uploads/polyanovskij.png"
                  alt="photo"
                  style={{ borderRadius: "50%", margin: "20px 0 15px 0" }}
                />
                <span className="student-name">Поляновський Евгеній</span>

                <p className="student-review">
                  "Виклад курсу доступний і зрозумілий, весь пройдений матеріал
                  день в день закріплюється практичними завданнями. Лектор
                  пояснює все більш ніж доступно, дає вичерпні відповіді на
                  будь-які питання. Величезним плюсом є доступ до CRM в
                  будь-який час доби, при необхідності можна повторити, згадати
                  або закріпити потрібну частину матеріалу. Окремо хотілося б
                  відзначити гарну організацію, дружню атмосферу, смачні
                  кофі-брейки, бездоганну технічну сторону організації навчання.
                  Спасибі всім і особливо лектору".
                </p>
              </div>
              <div
                className="stydents-review-box"
                style={{ display: slideToShow === 3 ? "flex" : "none" }}
              >
                <img
                  width={80}
                  height={80}
                  src="http://dynamics.net.ua/wp-content/uploads/Vylobkova2.jpg"
                  alt="photo"
                  style={{ borderRadius: "50%", margin: "20px 0 15px 0" }}
                />
                <span className="student-name">Вилобкова Вікторія</span>

                <p className="student-review">
                  "Це були гарні курси! Інформація була структурованою та
                  послідовною. Це мій перший досвід роботи з MS Dynamics CRM, не
                  зважаючи це, особливих складнощів у вивченні курсу не
                  виникало. Куратор продемонстрував нам справжні випадки роботи
                  з Microsoft CRM. Організація навчання була на високому рівні,
                  учасники завжди могли звернутися за допомогою. Також ми мали
                  можливість практикуватись із тестовим CRM. Як результат, я
                  можу сказати, що отримала нові навички та великий досвід
                  роботи з CRM".
                </p>
              </div>
              <img
                src={require("../images/arrow.png")}
                width={50}
                height={50}
                alt="arrow"
                className="slider-arrow"
                style={{ visibility: slideToShow === 3 ? "hidden" : "visible" }}
                onClick={() =>
                  setSlideToShow(slideToShow === 3 ? 3 : slideToShow + 1)
                }
              />
            </div>
          </div>
        </div>
        <Footer />
      </Home>
    </div>
  );
};

export default HomePage;
