import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Slider() {
  const [numContent, setContent] = useState(0);
  const nextHandler = () => {
    if (numContent < 4) {
      setContent(numContent + 1);
    } else {
      setContent(0);
    }
  };
  const prevHandler = () => {
    if (numContent > 0) {
      setContent(numContent - 1);
    } else {
      setContent(4);
    }
  };

  const data = [
    {
      content:
        "I absolutely love using Billette for all my ticket needs! The site is so easy to navigate and the ticket purchasing process is super simple. I've never had any issues with my tickets or the site itself. Highly recommend!",
      author: "Sarah L.",
      id: 0,
    },
    {
      content:
        "Billette has been a lifesaver for me when it comes to buying tickets for events. The site always has the best prices and a wide selection of tickets available. Plus, their customer service is top-notch and always quick to respond to any questions I have.",
      author: "Alex D.",
      id: 1,
    },
    {
      content:
        "I've been using Billette for years and have never been disappointed. The site is trustworthy and I always feel confident in my purchases. Their platform is user-friendly and they make it easy to find the perfect tickets for any event.",
      author: "Michael S.",
      id: 2,
    },
    {
      content:
        "Billette is hands down the best ticket sale site out there. I've tried using other sites in the past but Billette always has the best deals and customer service. They make it so easy to find and purchase tickets for any event. I highly recommend using Billette!",
      author: "Ashley P.",
      id: 3,
    },
    {
      content:
        "I was hesitant to use Billette at first but after my first purchase, I was hooked. The site is so easy to use and their prices are unbeatable. Plus, the tickets always arrive on time and I've never had any issues with them. I would definitely recommend Billette to anyone looking for a reliable ticket sale site.",
      author: "Kevin T.",
      id: 4,
    },
  ];
  const slideAnim = useAnimation();
  useEffect(() => {
    const animationFuction = async () => {
      await slideAnim.start({
        x: 10,
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      });
      await slideAnim.start({
        x: 0,
        opacity: 1,
      });
    };
    animationFuction();
  }, [numContent, slideAnim]);
  return (
    <Slide>
      <div className="container-sm flex-c">
        <p
          onClick={() => {
            prevHandler();
          }}
          className="controls"
        >
          <BsFillArrowLeftCircleFill />
        </p>
        <div
          className="container-sm"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Textarea animate={slideAnim}>
            <h2>{data[numContent].content}</h2>
            <p>{data[numContent].author}</p>
          </Textarea>
        </div>
        <p
          onClick={() => {
            nextHandler();
          }}
          className="controls"
        >
          <BsFillArrowRightCircleFill />
        </p>
      </div>
      <div className="new-controls">
        <p
          onClick={() => {
            prevHandler();
          }}
        >
          <BsFillArrowLeftCircleFill />
        </p>
        <p
          onClick={() => {
            nextHandler();
          }}
          className="controls"
        >
          <BsFillArrowRightCircleFill />
        </p>
      </div>
    </Slide>
  );
}
const Slide = styled.div`
  padding: 40px;
  padding-top: 50px;
  max-width: 100vw;
  overflow-x: hidden;
  /* min-height: 60vw; */
  svg {
    scale: 2;
    cursor: pointer;
  }

  .new-controls {
    display: none;
  }
  .flex-c {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 470px) {
      .controls {
        display: none;
      }
    }
  }
  @media screen and (max-width: 470px) {
    .new-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const Textarea = styled(motion.div)`
  width: 700px;
  text-align: center;
  h2 {
    color: #303030;
  }
  p {
    color: #16ce72;
    font-weight: bolder;
  }
  @media screen and (max-width: 1000px) {
    width: 400px;
  }
  @media screen and (max-width: 700px) {
    width: 350px;
    h2 {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 550px) {
    width: 300px;
    h2 {
      font-size: 23px;
    }
    p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 470px) {
    width: 270px;
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 13px;
      font-weight: bolder;
    }
  }

  h2 {
    font-weight: bolder;
  }
  p {
    margin-top: 30px;
  }
`;
export default Slider;
