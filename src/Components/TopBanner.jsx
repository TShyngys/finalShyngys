import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function TopBanner({ name, date, venue, upComing, imagePath }) {
  return (
    <ViewPort className="top-banner" imagePath={imagePath}>
      <WhiteShadow />
      <div className="t-area">
        <h3>{upComing && "Upcoming Event"}</h3>
        <h2>{name}</h2>
        <p>
          on <span>{date}</span> at <span>{venue}</span>
        </p>
      </div>
    </ViewPort>
  );
}
const ViewPort = styled.div`
  position: relative;
  width: 100%;
  min-height: 90vh;
  background-image: url(${(props) => require(`${props.imagePath}`)});
  background-position: center;
  background-size: cover;

  .t-area {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 10vh;
    flex-direction: column;
    display: flex;
    justify-content: center;
    h3 {
      font-weight: bolder;
    }
    h2 {
      color: #303030;
      font-family: "Poppins-Bold";
      font-size: 80px;
      @media screen and (max-width: 700px) {
        font-size: 70px;
      }
    }
    p {
      font-weight: bolder;
      span {
        color: #16ce72;
        border-bottom: solid 3px #30303063;
      }
    }
  }
`;
const WhiteShadow = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgb(255, 255, 255));
  opacity: 1;
  top: 0;
  left: 0;
  position: absolute;
`;
export default TopBanner;
