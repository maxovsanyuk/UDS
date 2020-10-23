import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import img1 from "../images/teambuilding.jpg";
import img2 from "../images/gallery/6.jpeg";
import img3 from "../images/gallery/5.jpeg";
import img4 from "../images/blog_images/imgpsh_fullsize_anim.jpeg";
import img5 from "../images/gallery/9.jpg";
import { setActivePage } from "../redux/actions/app_action";
import { useDispatch } from "react-redux";
import Media from "react-media";

const Blog = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  .blog-cont {
    width: 100%;
    max-width: 1400px;
    font-size: 18px;
  }
`;

const ImgCard = styled.div`
  display: flex;
  margin: 10px;
  transition: 0.5s;
  background: ${({ imgPatch }) => `url(${imgPatch}) no-repeat center`};
  background-size: 135%;
  position: relative;
  overflow: hidden;
  &:hover {
    background-size: 140%;
    transition: 0.5s;

    .detail-btn {
      display: flex;
    }

    .text {
      display: none;
    }
  }
  .detail-btn,
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 0;
    height: 60px;
    width: 100%;
    background: #b9dbf4;
    color: #262626;
    animation: appearingBtn 0.4s ease-in-out 0s 1 normal forwards;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      color: #0067b8;
    }
  }
  .detail-btn {
    display: none;
  }

  @keyframes appearingBtn {
    0% {
      margin: 0 0 -100px 0;
    }
    100% {
      margin: 0;
    }
  }
`;

const blogLinks = [
  {
    patch: "/blog/1",
    imgPatch: img1,
    text: "Тимбилбинг. Идеи для воплощения",
  },
  {
    patch: "/blog/2",
    imgPatch: img2,
    text: "New finalists of our CRM courses",
  },
  {
    patch: "/blog/3",
    imgPatch: img3,
    text: "The finalists of the «Microsoft Dynamics CRM Developer»",
  },
  {
    patch: "/blog/4",
    imgPatch: img4,
    text: "Женщины в ИТ: с чего начать свой путь",
  },
  {
    patch: "/blog/5",
    imgPatch: img5,
    text: "«Microsoft Dynamics CRM Developer» training course",
  },
];

function defineStyle(size) {
  if (size.xs) {
    return {
      width: "calc(100% - 20px)",
      height: "450px",
    };
  } else if (size.sm) {
    return {
      width: "calc(50% - 20px)",
      height: "380px",
    };
  } else if (size.md) {
    return {
      width: "calc(33% - 20px)",
      height: "360px",
    };
  } else if (size.lg) {
    return {
      width: "calc(25% - 20px)",
      height: "320px",
    };
  }
}

const BlogPage = ({}) => {
  const dispatch = useDispatch();
  document.body.style.overflow = "auto";

  return (
    <Media
      queries={{
        xs: "(max-width: 720px)",
        sm: "(max-width: 1100px)",
        md: "(max-width: 1400px)",
        lg: "(min-width: 1401px)",
      }}
    >
      {(size) => (
        <>
          <Header />
          <Blog>
            <div className="blog-cont">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  height: "280px",
                  justifyContent: "center",
                  background: "#B9DBF4",
                  margin: "40px 0 0 0",
                }}
              >
                <img
                  src={require("../images/goluboj-1100-na-300-1-1024x279.png")}
                  alt="img"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexWrap: "wrap",
                  margin: "20px auto 30px auto",
                }}
              >
                {blogLinks.map(({ imgPatch, patch, text }) => {
                  return (
                    <ImgCard imgPatch={imgPatch} style={defineStyle(size)}>
                      <Link
                        to={patch}
                        onClick={() => {
                          dispatch(setActivePage(null));
                          window.scrollTo(0, 0);
                        }}
                      >
                        <div className="detail-btn">Детальніше</div>
                        <div className="text">{text}</div>
                      </Link>
                    </ImgCard>
                  );
                })}
              </div>
            </div>
          </Blog>
          <Footer />
        </>
      )}
    </Media>
  );
};

export default BlogPage;
