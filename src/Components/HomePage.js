import React from "react";
import Header from "./Header";
import SimpleSlider from "./SimpleSlider";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { setActivePage } from "../redux/actions/app_action";
import { useDispatch } from "react-redux";
import ReactPlayer from "react-player/lazy";
import { HomePageStales } from "./ComponentsStyles/HomePageStyle";
import OurContactsComp from "./OurContactsComp";

const HomePage = ({}) => {
  const dispatch = useDispatch();
  document.body.style.overflow = "auto";

  return (
    <div>
      <Header />
      <HomePageStales>
        <div className="content">
          <div className="top-content">
            <ReactPlayer
              className="react-player"
              loop
              playing
              playsinline
              muted
              url="https://dynamicsnetuastorageprod.blob.core.windows.net/animations/Best_Main_Logo.webm"
              fileConfig={{ attributes: { autoPlay: true } }}
            />

            <div className="back-1">
              <div className="box-1">
                <div className="text-1">Dynamics Education –</div>
                <div className="text-2">
                  це курси для тих, хто хоче проявити себе в ІТ.
                </div>
                <div className="text-3">
                  Ми готуємо кваліфікованих спеціалістів починаючи з 2016 року.
                </div>
                <Link to="/contacts">
                  <button className="register-btn">Зареєструватися</button>
                </Link>
              </div>
            </div>

            <img
              src={require("../images/Vector.png")}
              alt="vector"
              className="vector-1"
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
            <div className="free-education-box">
              <div className="education-box-wrapper">
                <div className="text-4" style={{ width: "100%" }}>
                  Тобі до нас, якщо:
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                  className="box-2"
                >
                  <img
                    style={{ margin: "0 15px 0 0" }}
                    src={require("../images/Star11.png")}
                    alt="star"
                  />
                  <div className="text-5 text-15">
                    Ти молодий спеціаліст
                    <b> з технічним бекграундом та знанням англійської мови</b>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    width: "100%",
                    margin: "10px 0",
                  }}
                  className="box-2"
                >
                  <img
                    style={{ margin: "0 15px 0 0" }}
                    src={require("../images/Star11.png")}
                    alt="star"
                  />
                  <div className="text-5 text-15">
                    Ти хочешь отримувати <b>зарплату европейського рівня</b>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                  className="box-2"
                >
                  <img
                    style={{ margin: "0 15px 0 0" }}
                    src={require("../images/Star11.png")}
                    alt="star"
                  />
                  <div className="text-5 text-15">
                    <b>Немає досвіду роботи з MS Dynamics 365</b>, але ти
                    готовий навчатися
                  </div>
                </div>

                <Link to="/contacts">
                  <button
                    style={{ margin: "60px 0 0 0" }}
                    className="register-btn"
                  >
                    Хочу спробувати
                  </button>
                </Link>
              </div>
            </div>
            <div
              style={{ display: "flex", flex: 1, justifyContent: "center" }}
              className="display-none"
            >
              <img
                className="free-education"
                src={require("../images/Ill_Bonus_1.png")}
                alt="vector"
              />
            </div>
          </div>
          <div className="our-education-box">
            <div
              style={{ margin: "240px 0 50px 0" }}
              className="text-6 text-16"
            >
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
                  width: "100%",
                }}
              >
                <img
                  src={require("../images/Developer.png")}
                  alt="Developer"
                  className="ilustration"
                />

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
                  <Link to="/CRMDeveloper">
                    <button
                      style={{ margin: "20px 0 0 0" }}
                      className="detail-btn"
                      onClick={() => {
                        dispatch(setActivePage("/CRMDeveloper"));
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
                  width: "100%",
                }}
              >
                <img
                  src={require("../images/Consult.png")}
                  alt="Consult"
                  className="ilustration"
                />
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
                  <Link to="/CRMConsultant">
                    <button
                      style={{ margin: "30px 0 0 0" }}
                      className="detail-btn"
                      onClick={() => {
                        dispatch(setActivePage("/CRMConsultant"));
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
                top: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              className="line-2"
            />

            <img
              src={require("../images/Vector3.png")}
              alt="vector"
              style={{
                position: "absolute",
                bottom: "-1px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              className="line-3"
            />
          </div>
          <div
            style={{
              width: "100%",
              transform: "matrix(1, 0, 0, -1, 0, 0)",
              background:
                "linear-gradient(180deg, #DDE7F0 11.21%, #F2F5F8 50.23%)",
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
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
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
                          className="edu-img"
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
                  className="central-box-img"
                >
                  <div className="text-4 central-box">
                    Microsoft Dynamics 365
                  </div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
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
                            className="edu-img"
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
          <div className="our-advantages-cont">
            <img
              src={require("../images/Vector4.png")}
              alt="vector"
              style={{
                position: "absolute",
                top: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              className="line-4"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "240px 0 60px 0",
              }}
              className="text-6"
            >
              Наші переваги
            </div>

            <div className="our-add-box">
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  src={require("../images/Ill_Distance1.png")}
                  alt="Ill_Distance1"
                  className="our-advantages-imgs"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div style={{ width: "100%" }}>
                  <div
                    className="text-8"
                    style={{
                      color: "#3491C8",
                      textAlign: "start",
                      margin: "0 0 20px 0",
                    }}
                  >
                    Дистанційне навчання у зручний для тебе час
                  </div>
                  <div
                    className="text-5"
                    style={{ fontSize: "18px", width: "85%" }}
                  >
                    Курс «MS Dynamics 365 Developer» доступний для онлайн
                    навчання з будь-якої точки світу, графік навчання ти будуєш
                    самостійно.
                  </div>
                </div>
              </div>
            </div>
            <div className="our-add-box our-add-box-reverse">
              <div style={{ display: "flex", flex: 1, width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div
                      className="text-8"
                      style={{
                        color: "#3491C8",
                        textAlign: "start",
                        margin: "0 0 20px 0",
                      }}
                    >
                      По закінченню курсу видається сертифікат
                    </div>
                    <div
                      className="text-5"
                      style={{ fontSize: "18px", width: "85%" }}
                    >
                      Даний сертифікат є підтвердженням успішного проходження
                      курсу та видається тільки в цьому випадку.
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  src={require("../images/Ill_Certificate1.png")}
                  alt="Ill_Distance1"
                  className="our-advantages-imgs"
                />
              </div>
            </div>

            <div className="our-add-box">
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  src={require("../images/Ill_Employment1.png")}
                  alt="Ill_Distance1"
                  className="our-advantages-imgs"
                />
              </div>
              <div style={{ display: "flex", flex: 1, width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div
                      className="text-8"
                      style={{
                        color: "#3491C8",
                        textAlign: "start",
                        margin: "0 0 20px 0",
                      }}
                    >
                      Працевлаштування та практична підготовка
                    </div>
                    <div
                      className="text-5"
                      style={{ fontSize: "18px", width: "85%" }}
                    >
                      Випускники з високими результатами рекомендуються до
                      співбесіди з СТО та подальшого працевлаштування при
                      компанії UDS.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0 240px 0",
                position: "relative",
                overflow: "hidden",
              }}
              className="box-3"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "200px 0 0 0",
                }}
                className="text-6 text-17"
              >
                Детальніше про компанію UDS
              </div>
              <SimpleSlider
                className="player-1"
                arrOfImgs={[1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14]}
              />
              <img
                style={{
                  position: "absolute",
                  bottom: "-140px",
                  zIndex: 10,
                }}
                src={require("../images/Vector9.png")}
                alt="vector"
                className="line-5"
              />
            </div>
            <div className="review-cont">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  transform: "rotateX(180deg)",
                  padding: "0 0 20px 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px 0 0 0",
                  }}
                  className="text-6 text-18"
                >
                  Відгуки
                </div>
                <SimpleSlider
                  className="player-2"
                  arrOfImgs={["nizdropa2", "polyanovskij", "Vylobkova2"]}
                  reviewSlider
                />
              </div>
            </div>

            <OurContactsComp />
          </div>
        </div>
        <Footer />
      </HomePageStales>
    </div>
  );
};

export default HomePage;
