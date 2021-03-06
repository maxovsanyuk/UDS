import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Slider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  .dot {
    position: relative;
    z-index: 100;
    height: 12px;
    width: 12px;
    background: #3491c8;
    opacity: 0.3;
    border-radius: 50%;
    margin: 0 10px;
    &:hover {
      cursor: pointer;
    }

    @media (max-width: 600px) {
      height: 8px;
      width: 8px;
      margin: 0 5px;
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    min-width: 50px;
    border-radius: 50%;
    border: 1px solid #4e7baa;
    margin: 0 20px;
    background: transparent;
    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      min-height: 40px;
      min-width: 40px;
    }

    .btn-img {
      @media (max-width: 768px) {
        width: 10px !important;
      }
    }
  }

  .btn-1,
  .btn-2 {
    @media (max-width: 600px) {
      position: absolute;
      top: -40px;
      z-index: 50;
    }
  }

  .btn-1 {
    right: 220px;
    @media (max-width: 600px) {
      right: 80px;
    }
  }

  .btn-2 {
    left: 220px;
    @media (max-width: 600px) {
      left: 80px;
    }
  }

  .slider-box {
    display: flex;
    height: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .img-box {
    width: 220px;
    height: 220px;
    margin: 0 0 0 50px;
    border-radius: 50%;

    @media (max-width: 1000px) {
      width: 150px;
      height: 150px;
      margin: 0 0 0 50px;
    }

    @media (max-width: 768px) {
      margin: 60px 0 30px 0;
    }
  }

  .wrapper-box {
    margin: 0 !important;
    background-size: 60% !important;

    @media (max-width: 1000px) {
      background-size: 90% !important;
    }

    @media (max-width: 800px) {
      width: 50% !important;
    }

    @media (max-width: 400px) {
      width: 80% !important;
      margin: 0 !important;
    }
  }

  .box-7 {
    @media (max-width: 600px) {
      width: 90% !important;
    }
  }
`;

const SliderBox = styled.div`
  height: 650px;
  width: 100%;
  border: 1px solid #4e7baa;
  filter: drop-shadow(0px 4px 25px rgba(14, 38, 98, 0.1));
  border-radius: 10px;
  overflow: hidden;
  margin: 30px 0;
  background: #fff;
  position: relative;
  z-index: 100;

  @media (max-width: 1300px) {
    width: 70%;
    height: 450px;
  }
`;

const TextComp = styled.div`
  margin: 0 40px 0 0;

  @media (max-width: 600px) {
    margin: 0 !important;
  }

  .text-10 {
    font-weight: normal;
    font-size: 18px;
    color: #000;

    @media (max-width: 1300px) {
      font-size: 15px;
    }

    @media (max-width: 768px) {
      margin: 0;
      text-align: center;
    }
  }

  .text-11 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #000;
    margin: 15px 0;

    @media (max-width: 768px) {
      margin: 20px 0;
      text-align: center;
    }
  }

  .text-12 {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #4e7baa;

    @media (max-width: 768px) {
      text-align: center;
      padding: 0 0 40px 0;
    }
  }
`;

const DefineCont = ({ currentImg }) => {
  switch (currentImg) {
    case "nizdropa2":
      return (
        <TextComp>
          <div className="text-10">
            Цей курс дав мені набагато більше, ніж просто теоретичні знання в
            області Microsoft Dynamics CRM. Він познайомив мене з новими
            цікавими людьми, надихнув мене на нові цілі та дав можливість
            працювати у дивовижній команді. Мені все сподобалося, особливо те,
            як пояснювалися теми. У мене тільки позитивні емоції: гарна
            атмосфера, смачна кава та різноманітні смаколики. Цей навчальний
            курс був на високому рівні!
          </div>
          <div className="text-11">Tетяна</div>
          <div className="text-12">випускниця курсів</div>
        </TextComp>
      );
    case "polyanovskij":
      return (
        <TextComp>
          <div className="text-10">
            Виклад курсу доступний і зрозумілий, весь пройдений матеріал день в
            день закріплюється практичними завданнями. Лектор пояснює все більш
            ніж доступно, дає вичерпні відповіді на будь-які питання. Величезним
            плюсом є доступ до CRM в будь-який час доби, при необхідності можна
            повторити, згадати або закріпити потрібну частину матеріалу. Окремо
            хотілося б відзначити гарну організацію, дружню атмосферу, смачні
            кофі-брейки, бездоганну технічну сторону організації навчання.
            Спасибі всім і особливо лектору.
          </div>
          <div className="text-11">Евгеній</div>
          <div className="text-12">випускник курсів</div>
        </TextComp>
      );
    case "Vylobkova2":
      return (
        <TextComp>
          <div className="text-10">
            Це були гарні курси! Інформація була структурованою та послідовною.
            Це мій перший досвід роботи з MS Dynamics CRM, не зважаючи це,
            особливих складнощів у вивченні курсу не виникало. Куратор
            продемонстрував нам справжні випадки роботи з Microsoft CRM.
            Організація навчання була на високому рівні, учасники завжди могли
            звернутися за допомогою. Також ми мали можливість практикуватись із
            тестовим CRM. Як результат, я можу сказати, що отримала нові навички
            та великий досвід роботи з CRM.
          </div>
          <div className="text-11">Вікторія</div>
          <div className="text-12">випускниця курсів</div>
        </TextComp>
      );
    default:
      return "";
  }
};

const SimpleSlider = ({ arrOfImgs = [], style, className, reviewSlider }) => {
  const [currentImg, setCurrentImg] = useState(arrOfImgs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(arrOfImgs.indexOf(currentImg));
  }, [currentImg]);

  return (
    <Slider>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="btn btn-2"
          style={{ opacity: currentIndex === 0 && "0.4" }}
          disabled={currentIndex === 0}
          onClick={() => setCurrentImg(arrOfImgs[currentIndex - 1])}
        >
          <img
            className="btn-img"
            src={require(`../images/Vector8.png`)}
            style={{
              transform: "rotateY(180deg)",
              margin: "0 5px 0 0",
            }}
            alt="v"
          />
        </button>
        <SliderBox style={style} className={className}>
          {reviewSlider ? (
            <div className="slider-box">
              <div
                className="wrapper-box"
                style={{
                  width: "40%",
                  height: "100%",
                  display: "flex",
                  margin: "0 40px 0 0",
                  justifyContent: "center",
                  alignItems: "center",
                  background: `url(${require("../images/Back21.png")})no-repeat -10px 40px`,
                }}
              >
                <img
                  className="img-box"
                  src={
                    currentImg &&
                    require(`../images/sliderImgs/${currentImg}${
                      currentImg === "Vylobkova2" ? ".jpg" : ".png"
                    }`)
                  }
                  alt={currentImg}
                />
              </div>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="box-7"
              >
                <DefineCont currentImg={currentImg} />
              </div>
            </div>
          ) : (
            <img
              style={{ width: "100%", height: "100%" }}
              src={
                currentImg && require(`../images/sliderImgs/${currentImg}.jpg`)
              }
              alt={currentImg}
            />
          )}
        </SliderBox>
        <button
          className="btn btn-1"
          style={{ opacity: currentIndex + 1 === arrOfImgs.length && "0.4" }}
          disabled={currentIndex + 1 === arrOfImgs.length}
          onClick={() => setCurrentImg(arrOfImgs[currentIndex + 1])}
        >
          <img
            className="btn-img"
            src={require(`../images/Vector8.png`)}
            style={{
              margin: "0 0 0 5px",
            }}
            alt="v"
          />
        </button>
      </div>
      <div style={{ display: "flex" }}>
        {arrOfImgs.map((r) => {
          return (
            <div
              key={r}
              style={{ opacity: r === currentImg && 1 }}
              onClick={() => setCurrentImg(r)}
              className="dot"
            />
          );
        })}
      </div>
    </Slider>
  );
};

export default SimpleSlider;
