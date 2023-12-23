import styled from "styled-components";
import { motion } from "framer-motion";

export const Viewport = styled(motion.div)`
  display: block;
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
  margin: 0px;
  padding: 0px;
  margin-top: 0px;
  .testimonies {
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-family: "Poppins-Bold";
    }
    .center-line {
      width: 100%;
      margin: 20px;
      height: 3px;
      background-color: #dddddd;
    }
  }
  .w-300 {
    max-width: 350px;
  }
  .b-bk {
    background-color: #303030;
    padding: 30px 0px;

    h1 {
      color: #ffffff;
      padding-top: 30px;
    }
    h4 {
      color: #16ce72;
    }
    p {
      color: white;
    }
  }

  h1 {
    font-size: 50px;
    font-weight: bolder;
    text-align: center;
    margin: 50px auto;
  }
  .cover {
    width: 100vw;
    background-color: #f3f3f3;
    padding-top: 100px;
    padding-bottom: 100px;
    @media screen and (max-width: 850px) {
      padding-top: 40px;
      padding-bottom: 40px;
    }
    @media screen and (max-width: 450px) {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
`;
export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 98vh;
  align-items: center;

  .banner-col {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }

  .banner-text {
    font-family: "Playfair Display", serif;
    font-weight: 900;
    font-size: 50px;

    span {
      font-family: "Playfair Display", serif;
      color: #16ce72;
    }
  }
  .banner-text-ref {
    font-weight: bolder;
    font-size: 20px;
  }
  img {
    width: 750px;
  }
  @media screen and (max-width: 1335px) {
    height: 90vh;
    img {
      width: 600px;
    }
    .banner-text {
      font-size: 40px;
    }
    .banner-text-ref {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 1000px) {
    height: 80vh;
    img {
      width: 400px;
    }
    .banner-text {
      font-size: 25px;
    }
    .banner-text-ref {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 767px) {
    height: 90vh;
    img {
      width: 500px;
    }
    .banner-text {
      font-size: 35px;
      text-align: center;
    }
    .banner-text-ref {
      margin-top: 4px;
      font-size: 30px;
      text-align: center;
    }
  }
  @media screen and (max-width: 576px) {
    height: 80vh;
    align-items: center;
    .head-row {
      margin-top: 100px;
      max-width: 98vw;
    }
    img {
      width: 500px;
    }
    .banner-text {
      font-size: 30px;
    }
    .banner-text-ref {
      font-size: 15px;
      text-align: center;
      width: 90vw;
    }
  }
  @media screen and (max-width: 400px) {
    height: 100vh;
    .head-row {
      margin-top: 200px;
      max-width: 98vw;
    }
    img {
      width: 370px;
    }
  }
`;
export const WelcomePage = styled.div`
  background-color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 10px;
  min-height: 80vh;
  .w-100 {
    position: relative;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  * {
    text-align: center;
    margin-top: 20px;
    color: #16ce72;
  }
  h4 {
    font-size: 30px;
    font-weight: bolder;
  }
  h2 {
    color: white;
    font-weight: bolder;
    font-size: 60px;
  }
  p {
    color: white;
  }
  @media screen and (max-width: 1000px) {
    min-height: 60vh;
    * {
      text-align: center;
      margin-top: 20px;
      color: #16ce72;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 550px) {
    min-height: 75vh;
  }
`;
export const QuestionsTag = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
export const TextLink = styled.div`
  background-color: white;
  display: block;
  position: relative;
  height: 380px;
  min-width: 450px;
  padding: 60px 50px;
  margin: 10px 5px;

  h2 {
    font-weight: bolder;
    font-size: 40px;
    margin-bottom: 15px;
    width: 300px;
  }
  p {
    font-size: 13px;
    width: 280px;
  }
  .but-link {
    margin-top: 40px;
    width: 220px;
    height: 35px;
    background-color: none;
    border: solid 1px #303030;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    :hover {
      p {
        color: white;
        transition: all 0.8s cubic-bezier(1, 0.2, 0.5, 1);
      }
      svg {
        color: white;
      }
    }

    p {
      margin: 0px;
      font-size: 12px;
      width: 90px;
      z-index: 2;
      transition: all 0.8s cubic-bezier(1, 0.2, 0.5, 1);
      svg {
        display: inline-block;
        width: fit-content;
        color: white;
      }
    }

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #303030;
      transform: translateX(-230px);
      transition: all 0.8s cubic-bezier(1, 0.2, 0.5, 1);
    }
    :hover::before {
      transform: translateX(0px);
      transition: all 0.8s cubic-bezier(1, 0.2, 0.5, 1);
    }
  }
  @media screen and (max-width: 1000px) {
    scale: 0.9;
  }
  @media screen and (max-width: 890px) {
    scale: 1;
    background-color: white;
    display: block;
    position: relative;
    height: 350px;
    min-width: 400px;
    padding: 40px 50px;
    margin: 10px 5px;
    h2 {
      font-weight: bolder;
      font-size: 32px;
      margin-bottom: 15px;
      width: 250px;
    }
    p {
      font-size: 12px;
      width: 250px;
    }
    .but-link {
      margin-top: 40px;
      width: 220px;
      height: 35px;
      background-color: none;
      border: solid 1px #303030;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
  }
  @media screen and (max-width: 450px) {
    scale: 1;
    background-color: white;
    display: block;
    position: relative;
    height: 340px;
    min-width: 350px;
    padding: 40px 50px;
    margin: 10px 5px;
    h2 {
      font-weight: bolder;
      font-size: 30px;
      margin-bottom: 15px;
      width: 220px;
    }
    p {
      font-size: 11px;
      width: 220px;
    }
    .but-link {
      margin-top: 40px;
      width: 210px;
      height: 35px;
      background-color: none;
      border: solid 1px #303030;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
  }
  @media screen and (max-width: 400px) {
    scale: 1;
    background-color: white;
    display: block;
    position: relative;
    height: 310px;
    min-width: 310px;
    padding: 40px 50px;
    margin: 10px 5px;
    h2 {
      font-weight: bolder;
      font-size: 30px;
      margin-bottom: 15px;
      width: 210px;
    }
    p {
      font-size: 11px;
      width: 210px;
    }
    .but-link {
      margin-top: 40px;
      width: 180px;
      height: 35px;
      background-color: none;
      border: solid 1px #303030;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
  }
`;
export const CreateEvent = styled.div`
  margin-top: 80px;
  min-height: 80vh;
  p {
    font-size: 14px;
  }
  .w-300 {
    max-width: 300px;
  }
  h1 {
    color: #303030;
    font-weight: bolder;
    text-align: center;
    margin-top: 50px;
  }

  h4 {
    font-weight: bolder;
  }

  .flex-1 {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .phone-col {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 35px;
      font-weight: bolder;
    }
    h4 {
      font-size: 19px;
    }
    p {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 767px) {
    .mt-row {
      margin-top: 50px;
    }
    .w-300 {
      max-width: 90vw;
    }
  }
`;
export const PhoneImg = styled(motion.img)`
  width: 550px;
  position: relative;
  @media screen and (max-width: 1000px) {
    width: 450px;
  }
  @media screen and (max-width: 400px) {
    width: 350px;
  }
`;
export const CreateButton = styled.button`
  padding: 7px 20px;
  margin-top: 50px;
  border: none;
  background-color: #16ce72;
  color: white;
  font-size: small;

  @media screen and (max-width: 1000px) {
    margin-top: 20px;
  }
`;

export const SaleTools = styled.div`
  display: block;
  padding-bottom: 50px;
  .col-4-pic {
    .center-div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    img {
      width: 220px;
    }
  }

  .sale-ticket-text {
    text-align: center;
    scale: 0.8;
    margin-top: 0px;
  }
  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 35px;
    }
  }
`;

export const Reference = styled.div`
  padding: 50px 10px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #16ce72;
  color: white;

  h2 {
    color: white;
    font-weight: bolder;
    font-size: 40px;
  }
  p {
    font-weight: bolder;
  }
  .large {
    display: block;
    font-size: 120px;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    margin: 0px;
    height: 40px;
    color: white;
    padding: 0px;
  }
  .ref-img-holder {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ref-img {
    width: 500px;
  }
  @media screen and (max-width: 1025px) {
    .ref-img {
      width: 350px;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 767px) {
    .ref-img {
      width: 320px;
      margin-top: 30px;
    }
  }
`;
