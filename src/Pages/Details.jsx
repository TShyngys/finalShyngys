import React, { useEffect } from "react";
import "../App.css";
import TopBanner from "../Components/TopBanner";
import Data from "../Components/ApiData.json";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import SaleCounter from "../Components/SaleCounter";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Details() {
  let params = useParams();
  let id = params.id;
  function scrollUp() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    scrollUp();
  }, []);

  const actualData = Data.tickets.find((u) => u._id === id);
  return (
    <ViewPort
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
        y: -30,
        transition: {
          duration: 0.1,
        },
      }}
    >
      <TopBanner
        name={actualData.name}
        date={actualData.date}
        venue={actualData.venue}
        imagePath={`./images/Events/${actualData.img}`}
      />
      <div className="container-sm">
        <Box>
          <div className="row">
            <div className="col-md-8">
              <h4>Event Calender</h4>
              <p>{actualData.date}</p>
              <p>Africa/Nigeria</p>
              <button>Book now</button>
              <br />
              <small>120 tickets left</small>
            </div>
            <div className="col-md-4 price">
              <h4>Price</h4>
              <p style={{ fontWeight: "bolder" }}>
                {!isNaN(actualData.amount) && "₦"}
                {actualData.amount}
              </p>
            </div>
          </div>
        </Box>
        <Box>
          <h4>Description</h4>
          <p>{actualData.description}</p>
        </Box>
        <Box>
          <h4>{actualData.agent}</h4>
          <button>Send message</button>
        </Box>
        <Box>
          <small>Refunds won't be allowed after payment is made</small>
          <br />
          <SaleCounter amount={actualData.amount} />
        </Box>
      </div>
      <Footer />
    </ViewPort>
  );
}

const ViewPort = styled(motion.div)``;
const Box = styled.div`
  background-color: #f7f7f7;
  padding: 40px;
  margin: 30px 0px;
  .price {
    @media screen and (max-width: 767px) {
      margin-top: 30px;
    }
  }

  button {
    color: white;
    padding: 4px 10px;
    border: none;
    background-color: #16ce72;
  }
  small {
    opacity: 0.5;
    font-size: 12px;
  }
  h4 {
    font-weight: bolder;
    position: relative;
    padding-bottom: 10px;
    width: fit-content;
    margin-bottom: 20px;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 5px;
      width: 40px;
      background-color: #16ce72;
    }
  }
`;
export default Details;
