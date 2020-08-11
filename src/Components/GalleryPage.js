import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "react-grid-gallery";
import Media from "react-media";

const GalleryCont = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .gallery {
    width: 100%;
    animation: appearingGallery 0.8s ease-in-out 0.3s 1 normal forwards;
    opacity: 0;

    @keyframes appearingGallery {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .ReactGridGallery {
    max-width: 1400px;
    width: 100%;
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .ReactGridGallery_tile-viewport {
    ${({ imgStyle }) => imgStyle};
    width: 100% !important;
    & img {
      ${({ imgStyle }) => imgStyle};
      width: 100% !important;
    }
  }

  .ReactGridGallery_tile {
    ${({ imgStyle }) => imgStyle}
  }
`;

const ImgCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.4);
`;

const GalleryBox = styled.div`
  width: 100%;
  height: 280px;
  opacity: 0;
  background: url("http://dynamics.net.ua/wp-content/uploads/back.png")
    no-repeat left;
  animation: appearingGalleryImg 0.8s ease-in-out 0s 1 normal forwards,
    scrollingImg 290s linear 0s 1 normal;

  @keyframes appearingGalleryImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes scrollingImg {
    0% {
      background-position: left;
    }
    50% {
      background-position: right;
    }

    100% {
      background-position: left;
    }
  }
`;

const IMAGES = [
  {
    src: require("../images/gallery/1.jpeg"),
    thumbnail: require("../images/gallery/1.jpg"),
    caption:
      "Влад та Карина - успішні випускники курсу\n" +
      "MS Dynamics CRM Consultant",
  },

  {
    src: require("../images/gallery/2.jpeg"),
    thumbnail: require("../images/gallery/2.jpg"),
    caption: "Lucca Zaghi із Флоріанаполісу (Бразилія) на стажуванні ",
  },
  {
    src: require("../images/gallery/3.jpg"),
    thumbnail: require("../images/gallery/3.jpg"),
    caption:
      "Ірина та Тетяна - успішні випускники курсу MS Dynamics CRM Consultant",
  },
  {
    src: require("../images/gallery/4.jpeg"),
    thumbnail: require("../images/gallery/4.jpg"),
    caption: "Олександр - успішний випускник курсу MS Dynamics CRM Developer",
  },
  {
    src: require("../images/gallery/5.jpeg"),
    thumbnail: require("../images/gallery/5.jpg"),
    caption: "",
  },
  {
    src: require("../images/gallery/6.jpeg"),
    thumbnail: require("../images/gallery/6.jpg"),
    caption:
      "Максим та Владислав - успішні випускники курсу MS Dynamics CRM Developer",
  },
  {
    src: require("../images/gallery/7.jpeg"),
    thumbnail: require("../images/gallery/7.jpg"),
    caption: "Процес навчання консультантів у офісі на Лобановського",
  },
];

function defineStyle(size) {
  if (size.xs) {
    return "min-height: 700px !important; width: calc(100% - 20px)!important;";
  } else if (size.sm) {
    return "min-height: 500px !important; width: calc(50% - 20px)!important;";
  } else if (size.md) {
    return "min-height: 400px !important; width: calc(33% - 20px)!important;";
  } else if (size.lg) {
    return "min-height: 320px !important; width: calc(25% - 20px)!important;";
  }
}

const GalleryPage = ({}) => {
  document.body.style.overflow = "auto";

  const images = IMAGES.map((i) => {
    i.customOverlay = (
      <ImgCard>
        <img
          width={40}
          height={40}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/VisualEditor_-_Icon_-_Zoom%2BOOjs.svg/600px-VisualEditor_-_Icon_-_Zoom%2BOOjs.svg.png"
          alt="zoom"
        />
      </ImgCard>
    );
    return i;
  });

  return (
    <Media
      queries={{
        xs: "(max-width: 920px)",
        sm: "(max-width: 1150px)",
        md: "(max-width: 1400px)",
        lg: "(min-width: 1401px)",
      }}
    >
      {(size) => (
        <GalleryCont imgStyle={defineStyle(size)}>
          <div>
            <Header />
            <GalleryBox />
          </div>

          <div className="gallery">
            <Gallery
              enableImageSelection={false}
              images={images}
              showLightboxThumbnails
              preloadNextImage
            />
          </div>

          <Footer />
        </GalleryCont>
      )}
    </Media>
  );
};

export default GalleryPage;
