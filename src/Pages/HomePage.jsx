import "../App.css";
import TopBanner from "../Components/TopBanner";
import Slider from "../Components/Slider";

import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../Components/ApiData.json";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function HomePage() {
  const navigate = useNavigate();
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
        upComing={true}
        name={"Lagos Tech Fest"}
        date={"Mon, Jan 16, 12:00PM"}
        venue={"Sheraton Hotel and Suites"}
        imagePath={"./images/lagos-tech-fest-2.png"}
      />
      <div className="container-sm">
        <h2>
          Popular in <span>Location</span>
        </h2>
        <h3>Trending categories for you</h3>
        <Categories>
          <div className="row r-1">
            <div className="col-lg-3 col-md-6 col-6 category-col">
              <div className="category-box">Music</div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 category-col">
              <div className="category-box">Visual Art</div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 category-col">
              <div className="category-box">Holiday</div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 category-col">
              <div className="category-box">Health</div>
            </div>
          </div>
          <div className="row r-2">
            <div className="col-lg-3 col-md-6 col-6 category-col">
              <div className="category-box">Hobbies</div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 category-col">
              <div className="category-box">Business</div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 category-col">
              <div className="category-box">Food</div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 category-col">
              <div className="category-box">Sport</div>
            </div>
          </div>
        </Categories>
        <h3>Avialable Events</h3>
        <EventCatelogue>
          <div className="wrapper">
            {Data.tickets.map((ticket) => {
              return (
                <div className="card-holder" key={ticket._id}>
                  <div
                    className="new-card"
                    onClick={() => {
                      navigate(`/billette/get-ticket/details/${ticket._id}`);
                    }}
                  >
                    <div className="new-card-image-container">
                      <img
                        src={require(`../Components/images/Events/${ticket.img}`)}
                        alt="cardImage"
                        className="new-card-image"
                      />
                    </div>
                    <div className="new-card-text">
                      <small>
                        <span>{ticket.date}</span>
                      </small>
                      <h4 className="t-name">{ticket.name}</h4>

                      <p
                        className="t-amount"
                        style={{
                          fontWeight: "bolder",
                        }}
                      >
                        {!isNaN(ticket.amount) && "₦"}
                        {ticket.amount}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="show-more-wrapper">
            <button>Show more</button>
          </div>
        </EventCatelogue>
        <div className="testimonies">
          <div className="center-line"></div>
          <h1>Testimonies</h1>
          <div className="center-line"></div>
        </div>
        <Slider />
        <Reviews></Reviews>
      </div>
      <Footer />
    </ViewPort>
  );
}
const ViewPort = styled(motion.div)`
  * {
    color: #303030;
  }
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
  h2 {
    font-weight: bolder;
    span {
      color: #16ce72;
      font-size: 28px;
      border-bottom: solid 4px #30303063;
    }
  }
  h3 {
    font-weight: bolder;
    margin-top: 30px;
  }
`;
const Categories = styled.div`
  display: block;
  margin: 10px 0px 30px 0px;
  .r-1,
  .r-2 {
    .category-col {
      margin: 0px;
      padding: 0px 3px;
      .category-box {
        background-color: white;
        margin-top: 10px;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        border-radius: 5px;
        border: solid 2px #d1d1d1;
        font-weight: 600;
        transition: all 0.2s ease-in-out;

        :hover {
          background-color: #b2f7d4;
          border: solid 2px #8ffac5;
          transition: all 0.2s ease-in-out;
          color: white;
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    .r-2 {
      margin-top: 0px;
    }
    .category-box {
      margin-top: 10px;
    }
  }
`;
const EventCatelogue = styled.div`
  .show-more-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    button {
      width: 270px;
      border: solid 2px #bbbbbb;
      background-color: white;
      color: #bbbbbb;
      height: 45px;
      font-weight: bolder;
      border-radius: 5px;
    }
  }

  .wrapper {
    position: relative;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

    .card-holder {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

      .t-name {
        overflow: hidden;
        height: 30px;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 20px;
      }
      .t-amount {
        opacity: 0.6;
      }
      span {
        color: #16ce72;
      }
    }
  }
`;
const Reviews = styled.div``;

export default HomePage;
