import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import OurContactsComp from "./OurContactsComp";
import Media from "react-media";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GalleryCont = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Montserrat;

  .img-cont-2 {
    width: 300px;
    height: 200px;
    margin: 0 15px;
    background-size: 140% !important;
    transition: 0.4s;
    &:hover {
      cursor: pointer;
      transition: 0.4s;
      background-size: 150% !important;
    }
  }

  .active {
    box-shadow: 0 0 8px 5px #999;
  }

  .btn {
    height: 55px;
    width: 55px;
    min-width: 55px;
    background: #dee8f1;
    border-radius: 50%;
    transition: 0.3s;
    border: none;

    &:hover {
      transition: 0.3s;
      cursor: pointer;
      box-shadow: 0 0 15px 2px #999;
    }
    &:focus {
      outline: none;
    }
  }

  .btn-img {
    transform: scale(0.8);
  }
`;

const TopSlider = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  margin: 100px 0 20px 0;
  position: relative;

  .btn {
    height: 70px;
    width: 70px;
    min-width: 70px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    border: none;
    transition: 0.3s;
    box-shadow: 0 0 5px 1px #999;

    &:hover {
      transition: 0.3s;
      cursor: pointer;
      box-shadow: 0 0 15px 2px #999;
    }
    &:focus {
      outline: none;
    }
  }

  .btn-1 {
    position: absolute;
    top: 40%;
    left: 40px;
  }

  .btn-2 {
    position: absolute;
    top: 40%;
    right: 40px;
  }

  .text {
    width: calc(100% - 20px);
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    background: #e8e8e8;
    margin: 30px 0 0 0;
    text-align: center;
    padding: 0 10px;
  }

  .img-cont-1 {
    width: 80%;
    margin: 0 10%;
    height: 650px;
    background-size: cover !important;

    @media (max-width: 1000px) {
      height: 470px;
    }

    @media (max-width: 800px) {
      height: 370px;
    }
  }
`;

const SMGalleryCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 40px 0 0 0;

  .img-cont-3 {
    width: 90%;
    height: 400px;
    margin: 0 5% 20px 5%;
    background-size: cover !important;

    @media (max-width: 500px) {
      height: 250px;
    }

    @media (max-width: 400px) {
      height: 200px;
    }
  }

  .text {
    width: calc(90% - 20px);
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    background: #e8e8e8;
    margin: 30px 5% 50px 5%;
    text-align: center;
    padding: 0 10px;
  }

  .more-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #cacaca;

    &:hover {
      cursor: pointer;
    }
  }
`;

const IMAGES = [
  {
    src: "1.JPG",
    caption: "Робочі будні розробників в компанії UDS",
  },
  {
    src: "2.JPG",
    caption: "Зосереджений PM фінського проекту",
  },

  {
    src: "3.JPG",
    caption:
      "Випускниці курсу MS Dynamics 365 Consultant c CEO, на даний момент PM німецького проекту",
  },
  {
    src: "4.jpg",
    caption: "Час згадати минулий рік і його досягнення",
  },
  {
    src: "5.jpg",
    caption: "Збираємося на пікнік до голосіївського лісу",
  },
  {
    src: "6.jpg",
    caption: "Бачення майбутнього розвитку компанії від СТО",
  },
  {
    src: "7.JPEG",
    caption: "Продуктивний початок дня розробника",
  },
  {
    src: "8.jpg",
    caption: "Успішний випускник курсу MS Dynamics 365 Developer",
  },
  {
    src: "9.JPEG",
    caption: "Девіз академії Dynamics Education",
  },
  {
    src: "10.JPG",
    caption: "Блискучий випускник курсу MS Dynamics 365 Consultant",
  },
  {
    src: "11.JPG",
    caption: "Випускники курсу MS Dynamics 365 Developer",
  },
  {
    src: "12.jpg",
    caption: "CEO та СТО компанії на зустрічі з проджект менеджерами",
  },
];

const SMGallery = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <SMGalleryCont id="top">
      {IMAGES.slice(0, showAll ? IMAGES.length : 3).map((r) => {
        return (
          <div style={{ width: "100%" }} key={r.src}>
            <div className="img-cont-3">
              <LazyLoadImage
                alt={r.src}
                height="100%"
                src={require(`../images/gallery/${r.src}`)}
                width="100%"
              />
            </div>
            <div className="text">{r.caption}</div>
          </div>
        );
      })}

      <a
        className="more-btn"
        href="#top"
        onClick={() => {
          window.scrollTo({
            top: 400,
            behavior: "smooth",
          });
          setShowAll((pr) => !pr);
        }}
      >
        {!showAll && (
          <img
            style={{ width: "max-content", margin: "0 0 40px 0" }}
            src={require("../images/Vector20.png")}
            alt="vec"
          />
        )}
        {!showAll ? "Дивитись ще" : "Приховати"}
      </a>
    </SMGalleryCont>
  );
};

const GalleryPage = ({}) => {
  const [currentImg, setCurrentImg] = useState(IMAGES[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliceFrom, setSliceFrom] = useState(0);
  const [sliceTo, setSliceTo] = useState(4);

  useEffect(() => {
    setCurrentIndex(IMAGES.indexOf(currentImg));
  }, [currentImg?.src]);

  return (
    <Media
      queries={{
        lg: "(max-width: 1150px)",
        md: "(max-width: 900px)",
        sm: "(max-width: 650px)",
      }}
    >
      {(size) => {
        size.lg && setSliceTo(3);
        size.md && setSliceTo(2);

        return (
          <GalleryCont>
            <Header />

            {size.sm ? (
              <SMGallery />
            ) : (
              <>
                <TopSlider>
                  <button
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentImg(IMAGES[currentIndex - 1])}
                    className="btn btn-1"
                    style={{ opacity: currentIndex === 0 && "0.4" }}
                  >
                    <img
                      style={{
                        transform: "rotateY(180deg)",
                      }}
                      src={require(`../images/Vector11.png`)}
                      alt="v"
                    />
                  </button>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <div
                      className="img-cont-1"
                      style={{
                        background: `#f2f2f2 url(${require(`../images/gallery/${currentImg.src}`)})no-repeat center 10%`,
                      }}
                    />
                    <div className="text">{currentImg.caption}</div>
                  </div>
                  <button
                    onClick={() => {
                      currentIndex + 1 === IMAGES.length
                        ? setCurrentImg(IMAGES[0])
                        : setCurrentImg(IMAGES[currentIndex + 1]);
                    }}
                    className="btn btn-2"
                  >
                    <img src={require(`../images/Vector11.png`)} alt="v" />
                  </button>
                </TopSlider>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    style={{ opacity: sliceFrom === 0 && "0.4" }}
                    className="btn"
                    disabled={sliceFrom === 0}
                    onClick={() => {
                      setSliceFrom((prev) => prev - 1);
                      setSliceTo((prev) => prev - 1);
                    }}
                  >
                    <img
                      className="btn-img"
                      src={require(`../images/Vector11.png`)}
                      style={{
                        transform: "rotateY(180deg) scale(0.8)",
                        margin: "0 3px 0 0",
                      }}
                      alt="v"
                    />
                  </button>

                  <div style={{ display: "flex", padding: "10px" }}>
                    {IMAGES.slice(sliceFrom, sliceTo).map((r) => {
                      return (
                        <div
                          className={`img-cont-2 ${
                            r.src === currentImg.src && "active"
                          }`}
                          key={r.src}
                          onClick={() => {
                            setCurrentImg(r);
                          }}
                        >
                          <LazyLoadImage
                            alt={r.src}
                            height="100%"
                            src={require(`../images/gallery/${r.src}`)}
                            width="100%"
                          />
                        </div>
                      );
                    })}
                  </div>

                  <button
                    style={{ opacity: sliceTo === IMAGES.length && "0.4" }}
                    className="btn"
                    disabled={sliceTo === IMAGES.length}
                    onClick={() => {
                      setSliceFrom((prev) => prev + 1);
                      setSliceTo((prev) => prev + 1);
                    }}
                  >
                    <img
                      className="btn-img"
                      style={{ margin: "0 0 0 3px" }}
                      src={require(`../images/Vector11.png`)}
                      alt="v"
                    />
                  </button>
                </div>
              </>
            )}
            <OurContactsComp hideLine style={{ padding: "140px 0 60px 0" }} />
            <Footer />
          </GalleryCont>
        );
      }}
    </Media>
  );
};

export default GalleryPage;
