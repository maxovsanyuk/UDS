import styled from "styled-components";

export const HomePageStales = styled.div`
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

    @media (max-width: 1300px) {
      margin: 0;
    }

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

      @media (max-width: 1300px) {
        font-size: 18px;
        padding: 15px 50px;
        position: relative;
        margin: 30px 0 0 0;
      }

      @media (max-width: 950px) {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }

      @media (max-width: 768px) {
        font-size: 14px;
        padding: 15px 50px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: 40px 0 0 0;
      }

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

      @media (max-width: 950px) {
        font-size: 18px;
        padding: 15px 30px;
      }

      @media (max-width: 600px) {
        font-size: 14px;
        border: 2px solid #3491c8;
        padding: 10px 30px;
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

    @media (max-width: 1300px) {
      font-size: 32px;
      margin: 20px 0 0 0;
    }

    @media (max-width: 950px) {
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 32px;
      margin: 40px 0 0 0;
    }

    @media (max-width: 600px) {
      font-size: 18px;
      margin: 40px 0 0 0;
    }
  }

  .text-2 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 135%;
    color: #09051f;

    @media (max-width: 1300px) {
      font-size: 24px;
      margin: 20px 0 0 0;
    }

    @media (max-width: 950px) {
      text-align: center;
    }

    @media (max-width: 768px) {
      text-align: center;
      font-size: 16px;
    }
  }

  .text-3 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 130%;
    margin: 20px 0 0 0;
    color: #100a2e;

    @media (max-width: 1300px) {
      font-size: 18px;
      margin: 20px 0 0 0;
    }

    @media (max-width: 950px) {
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 14px;
      text-align: center;
    }
  }

  .text-4 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 140%;
    margin: 0 0 30px 0;
    color: #3491c8;

    @media (max-width: 768px) {
      text-align: center;
    }

    @media (max-width: 600px) {
      font-size: 24px;
    }
  }

  .text-5 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #09051f;

    @media (max-width: 1000px) {
      font-size: 16px !important;
    }

    @media (max-width: 768px) {
      font-size: 14px !important;
      text-align: center;
      width: 100% !important;
    }
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

    @media (max-width: 900px) {
      font-size: 34px;
    }

    @media (max-width: 768px) {
      margin: 40px 0 60px 0 !important;
    }
    @media (max-width: 600px) {
      font-size: 24px;
      margin: 0 !important;
      line-height: 22px;
    }
  }

  .text-7 {
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #09051f;

    @media (max-width: 600px) {
      font-size: 18px;
      margin: 0 !important;
      width: 160px;
      line-height: 22px;
    }
  }

  .text-8 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #000;

    @media (max-width: 1000px) {
      font-size: 18px;
      height: 40px;
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }

    @media (max-width: 600px) {
      font-size: 14px;
      line-height: 20px;
      text-align: center !important;
    }
  }
  .text-15 {
    text-align: left;
    @media (max-width: 650px) {
      width: 340px !important;
    }
  }
  .text-16 {
    @media (max-width: 600px) {
      margin: 20px 0 0 0 !important;
    }
  }

  .text-17 {
    padding: 100px 0 !important;
  }

  .text-18 {
    padding: 0 0 70px 0 !important;
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

    @media (max-width: 1200px) {
      flex-direction: column;
      height: auto;
    }
  }

  .our-advantages-cont {
    width: 100%;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      padding: 200px 0 0 0;
    }

    @media (max-width: 600px) {
      padding: 140px 0 0 0;
    }
  }

  .review-cont {
    width: 100%;
    background: linear-gradient(180deg, #dde7f0 11.47%, #f2f5f8 51.41%);
    transform: matrix(1, 0, 0, -1, 0, 0);
    position: relative;
    z-index: 15;
  }

  .react-player {
    margin: 180px 0 0 50px;
    transform: scale(1.8);
    position: relative;
    z-index: 20;

    @media (max-width: 1300px) {
      margin: 100px 0 0 0;
      transform: scale(1.4);
    }

    @media (max-width: 1100px) {
      max-width: 500px;
      margin: 140px 0 0 0;
      transform: scale(1.2);
    }

    @media (max-width: 950px) {
      max-width: 500px;
      margin: 125px 0 0 0;
      transform: scale(1.4);
    }

    @media (max-width: 600px) {
      max-width: 400px;
      max-height: 310px;
      margin: 0;
      transform: scale(1);
    }
  }

  .top-content {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    height: 700px;
    margin: 60px 0 0 0;

    @media (max-width: 1300px) {
      height: 570px;
      margin: 0;
    }

    @media (max-width: 950px) {
      height: auto;
      justify-content: center;
    }

    @media (max-width: 780px) {
      height: auto;
    }
  }

  .back-1 {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${`url(${require("../../images/Back1.png")})no-repeat center 50px`};

    @media (max-width: 1300px) {
      align-items: flex-start;
    }

    @media (max-width: 768px) {
      background: ${`url(${require("../../images/Back1.png")})no-repeat center 20px`};
      background-size: 80%;
    }

    @media (max-width: 600px) {
      background: ${`url(${require("../../images/Back1.png")})no-repeat 100px center`};
      background-size: 60%;
    }
    @media (max-width: 380px) {
      background: ${`url(${require("../../images/Back1.png")})no-repeat 40px -120px`};
      background-size: 100%;
    }
  }

  .box-1 {
    width: 450px;

    @media (max-width: 1300px) {
      margin: 100px 0 0 0;
    }
    @media (max-width: 950px) {
      margin: 100px 0 260px 0;
    }

    @media (max-width: 768px) {
      margin: 100px 0 70px 0;
    }

    @media (max-width: 600px) {
      margin: 0;
      width: 100%;
    }
  }

  .vector-1 {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      position: relative;
      margin: 40px 0 0 0;
      transform: none;
      bottom: unset;
      left: unset;
    }

    @media (max-width: 600px) {
      left: 0;
      bottom: -35px;
      transform: scale(0.5);
      margin: 0;
    }

    @media (max-width: 400px) {
      left: -150px;
      bottom: -35px;
      transform: scale(0.5);
      margin: 0;
    }
  }

  .free-education {
    position: relative;
    z-index: 10;
    transform: scale(0.9);

    @media (max-width: 1300px) {
      transform: scale(0.8);
    }

    @media (max-width: 1200px) {
      transform: scale(1);
    }

    @media (max-width: 768px) {
      transform: scale(0.7);
    }

    @media (max-width: 600px) {
      display: none;
    }
  }

  .free-education-box {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    @media (max-width: 1300px) {
      justify-content: flex-end;
    }

    @media (max-width: 1250px) {
      justify-content: center;
      margin: 40px 0 0 0;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .education-box-wrapper {
    width: 600px;
    padding: 0 0 0 20px;

    @media (max-width: 1250px) {
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .ilustration {
    @media (max-width: 1100px) {
      transform: scale(0.8);
    }

    @media (max-width: 600px) {
      max-width: 360px;
    }
  }

  .our-advantages-imgs {
    transform: scale(0.9);
    @media (max-width: 1000px) {
      transform: scale(0.7);
    }
    @media (max-width: 600px) {
      transform: scale(0.5);
    }
  }
  .central-box {
    width: 250px;
    text-align: center;
    margin: 0 0 0 40px;

    @media (max-width: 1200px) {
      height: 250px;
    }

    @media (max-width: 600px) {
      height: 160px;
      width: 100px;
      font-size: 18px;
      margin: 0;
      display: flex;
      align-items: center;
    }
  }

  .central-box-img {
    @media (max-width: 600px) {
      background-size: 55% !important;
    }

    @media (max-width: 380px) {
      background-size: 85% !important;
    }
  }

  .player-1 {
    width: 920px;
    max-width: 920px;
    height: 540px;

    @media (max-width: 950px) {
      width: 600px;
      height: 400px;
    }

    @media (max-width: 768px) {
      width: 500px;
      height: 300px;
    }

    @media (max-width: 600px) {
      width: 90%;
      margin: 20px 5%;
      height: 200px;
    }
  }

  .player-2 {
    width: 920px;
    height: 380px;

    @media (max-width: 950px) {
      width: 600px;
      height: 400px;
    }
    @media (max-width: 768px) {
      width: 500px;
      height: auto;
    }
    @media (max-width: 600px) {
      width: 90%;
      margin: 20px 5%;
    }
  }

  .our-add-box {
    display: flex;
    flex-wrap: wrap;
    margin: 0 20px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .our-add-box-reverse {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .our-education-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 0 0 200px 0;

    @media (max-width: 768px) {
      padding: 200px 0;
    }
    @media (max-width: 600px) {
      padding: 140px 0;
    }
  }

  .box-2 {
    @media (max-width: 768px) {
      width: 340px !important;
    }

    @media (max-width: 600px) {
      width: calc(100% - 20px) !important;
      display: flex;
      padding: 0 10px;
      justify-content: center;
    }
  }

  .box-3 {
    @media (max-width: 600px) {
      padding: 0 0 100px 0 !important;
    }
  }

  .line-2 {
    @media (max-width: 600px) {
      transform: scale(0.6) !important;
      top: -65px !important;
      left: -540px !important;
    }
  }
  .line-3 {
    @media (max-width: 600px) {
      transform: scale(0.6) !important;
      bottom: -65px !important;
      left: -540px !important;
    }
  }

  .line-4 {
    @media (max-width: 600px) {
      transform: scale(0.6) !important;
      top: -65px !important;
      left: -440px !important;
    }
  }

  .line-5 {
    @media (max-width: 600px) {
      transform: scale(0.6) !important;
      bottom: -165px !important;
      left: -340px !important;
    }

    @media (max-width: 400px) {
      transform: scale(0.6) !important;
      bottom: -165px !important;
      left: -540px !important;
    }
  }

  .line-6 {
    @media (max-width: 600px) {
      transform: scale(0.6) !important;
      top: -65px !important;
      left: -440px !important;
    }
  }

  .edu-img {
    @media (max-width: 600px) {
      width: 50px !important;
    }
  }

  .display-none {
    @media (max-width: 600px) {
      display: none !important;
    }
  }
`;
