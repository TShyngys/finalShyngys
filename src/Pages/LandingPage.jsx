import PhoneImage from "../Components/images/phone.png";
import One from "../Components/images/billette_3.png";
import Two from "../Components/images/billette_2.png";
import topImage from "../Components/images/bannerPNG.png";
import Footer from "../Components/Footer";
import Reveal from "../Components/untils/Reveal";
import Appear from "../Components/untils/Appear";
import Slider from "../Components/Slider";
import Three from "../Components/images/billette_1.png";
import Four from "../Components/images/billette_4.png";
import buildWorld from "../Components/images/newIllyustation-01.png";
import refImage from "../Components/images/refImage.JPG";
import GrowthImage from "../Components/images/promote-events-grow-platform-003.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import "../App.css";
import {
  Viewport,
  Heading,
  WelcomePage,
  QuestionsTag,
  TextLink,
  CreateEvent,
  PhoneImg,
  CreateButton,
  SaleTools,
  Reference,
} from "./Styles/LandingPageStyles";

function LandingPage() {
  const ContainerVarient = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.1,
      },
    },
  };
  const downUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const farLeft = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
        type: "spring",
        stiffness: 50,
      },
    },
  };
  return (
    <Viewport
      variants={ContainerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Heading className="lp-top-banner">
        <div className="container-sm">
          <div className="head-row">
            <div className="row">
              <div className="col-md-5 banner-col">
                <Reveal>
                  <h2 className="banner-text">
                    Discover the ultimate ticket-buying experience with{" "}
                    <span>Billette.</span>
                  </h2>
                </Reveal>
                <Reveal>
                  <h3 className="banner-text-ref">
                    Your go-to destination for live events.
                  </h3>
                </Reveal>
              </div>
              <div className="col-md-7">
                <img src={topImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Heading>

      <WelcomePage>
        <Appear>
          <div className="container-sm w-100">
            <h4>Welcome to Billette</h4>
            <h2>The best online tool to sell tickets faster and stress-free</h2>
            <p>
              Billette is a global event ticketing and marketing platform,
              powering millions of events in nearly 180 contries. We empower
              event organizers with industriel-leading tools and technology to
              create, manage, and promote unforgettable live experience around
              the world.
            </p>
          </div>
        </Appear>
      </WelcomePage>

      <div className="cover">
        <QuestionsTag className="py-5 container-sm">
          <TextLink>
            <Reveal>
              <h2>Create Your Event</h2>
            </Reveal>
            <Reveal>
              <p>
                Easily create, manage, and a memorable in person or virtual
                event experience on trusted platform.
              </p>
            </Reveal>
            <div className="but-link">
              <Reveal>
                <p>
                  Learn more <BsArrowRight />
                </p>
              </Reveal>
            </div>
          </TextLink>
          <TextLink>
            <Reveal>
              <h2>Built for Growth</h2>
            </Reveal>
            <Reveal>
              <p>
                Tap into the world's greatest marketplace and expand your reach
                with social marketing tools powered by our exclusive data.
              </p>
            </Reveal>
            <div className="but-link">
              <Reveal>
                <p>
                  Learn more <BsArrowRight />
                </p>
              </Reveal>
            </div>
          </TextLink>
        </QuestionsTag>
      </div>
      <CreateEvent className="create-event container-sm">
        <motion.h1
          variants={downUp}
          transition={{
            delay: 0.4,
            duration: 0.3,
            type: "spring",
            stiffness: 120,
          }}
        >
          Create your event with the best online ticketing system
        </motion.h1>
        <div className="row flex-1">
          <div className="col-md-5 phone-col">
            <PhoneImg variants={farLeft} src={PhoneImage} alt="phoneImage" />
          </div>
          <div className="col-md-7">
            <div className="row mt-row">
              <div className="col-md-6 w-300">
                <Reveal>
                  <h4>Event creation and ticketing tools</h4>
                </Reveal>
                <Reveal>
                  <p className="mt-3">
                    Selling tickets online with Billette is easier than ever.
                    Post your event, build your own professional online
                    ticketing system, and create tickets for both in-person and
                    virtual events in just minutes.{" "}
                  </p>
                </Reveal>
              </div>
              <div className="col-md-6 w-300">
                <Reveal>
                  <h4>Customizable event pages</h4>
                </Reveal>
                <Reveal>
                  <p className="mt-3">
                    Provide a seamless online ticket purchasing experience for
                    your attendees with customizable event pages that that
                    engage and inform your audience, from the first headline to
                    checkout.{" "}
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 w-300">
                <Reveal>
                  <h4>Flexible event payouts</h4>
                </Reveal>
                <Reveal>
                  <p className="mt-3">
                    Set up online ticket payouts for your events on a custom
                    schedule of your choice and get paid quickly.{" "}
                  </p>
                </Reveal>
              </div>
              <div className="col-md-6 w-300">
                <Reveal>
                  <h4>Billette Organizer App</h4>
                </Reveal>
                <Reveal>
                  <p className="mt-3">
                    Monitor on-site and online ticket sales, complete attendee
                    check-ins, and view real-time data on the go with our
                    easy-to-use mobile app.{" "}
                  </p>
                </Reveal>
              </div>
            </div>
            <CreateButton>Create an event</CreateButton>
          </div>
        </div>
      </CreateEvent>
      <CreateEvent className="create-event b-bk">
        <div className="container-sm">
          <h1>An event ticketing platform built for growth</h1>
          <div className="row mt-row">
            <div className="col-md-6 p-lg-5">
              <div className="w-300">
                <h4 className="">Attendee discovery</h4>
                <Reveal>
                  <p className="mt-3">
                    Event-goers searching for unique things to do account for 1
                    out of 4 tickets sold on Eventbrite with personalized
                    recommendations in our consumer app and newsletters.
                  </p>
                </Reveal>
              </div>
              <div className="w-300">
                <h4 className="mt-5">Billette Boost</h4>
                <Reveal>
                  <p className="mt-3">
                    Power your growth with our all-in-one marketing platform
                    designed specifically for events. Utilize time-saving social
                    media ad tools to reach more people with smart audience
                    targeting capabilities.
                  </p>
                </Reveal>
              </div>
              <div className="w-300">
                <h4 className="mt-5">Share on social</h4>
                <Reveal>
                  <p className="mt-3">
                    Easily share your events on Facebook or LinkedIn directly
                    from your Eventbrite account and position yourself as the
                    top online ticket seller in your industry with more
                    impressions, clicks, and shares.
                  </p>
                </Reveal>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PhoneImg alt="placeImage" src={GrowthImage} />
            </div>
          </div>
        </div>
      </CreateEvent>
      <CreateEvent className="create-event container-sm">
        <h1>Build your community</h1>
        <div className="row mt-row">
          <div className="col-md-6">
            <PhoneImg variants={farLeft} src={buildWorld} alt="placeImage" />
          </div>
          <div className="col-md-6 p-lg-5 mt-row">
            <div className="w-300">
              <Reveal>
                <h4>Email marketing tools</h4>
              </Reveal>
              <Reveal>
                <p className="mt-3">
                  Subscribe to Eventbrite Boost to quickly and easily send
                  emails to your community with no contact limits and up to
                  10,000 daily sends. Our open rates are 59% higher than the
                  industry average.
                </p>
              </Reveal>
            </div>
            <div className="w-300">
              <Reveal>
                <h4 className="mt-5">Audience reports & insights</h4>
              </Reveal>
              <Reveal>
                <p className="mt-3">
                  Discover where your ticket sales are coming from, and get
                  detailed information about your ticket buyers, event
                  attendance, and more.
                </p>
              </Reveal>
            </div>
            <div className="w-300">
              <Reveal>
                <h4 className="mt-5">Automated event notifications</h4>
              </Reveal>
              <Reveal>
                <p className="mt-3">
                  Keep your community engaged and your events top-of-mind with
                  automated event reminders and updates when event-goers attend,
                  “Follow” or “Like” your events.
                </p>
              </Reveal>
            </div>

            <CreateButton>Build your community</CreateButton>
          </div>
        </div>
      </CreateEvent>
      <SaleTools>
        <div className="container-sm py-3">
          <h1>More tools to sell tickets to your event</h1>
          <div className="row col-4-pic">
            <div className="col-md-3 center-div">
              <img src={One} alt="pic" />
              <div className="sale-ticket-text">
                <h4>Embedded checkout</h4>
                <p>
                  Sell tickets online with Eventbrite's easy-to-use Embedded
                  Checkout functionality. Your attendees can complete their
                  online ticket purchase without ever having to leave your event
                  website or blog.
                </p>
              </div>
            </div>
            <div className="col-md-3 center-div">
              <img src={Two} alt="pic" />
              <div className="sale-ticket-text">
                <h4>Scheduled payouts</h4>
                <p>
                  Receive an advance of ticket sales before your events take
                  place — on a customized schedule of your choice.
                </p>
              </div>
            </div>
            <div className="col-md-3 center-div">
              <img src={Three} alt="pic" />
              <div className="sale-ticket-text">
                <h4>Collections</h4>
                <p>
                  Group your related events onto individual collection pages to
                  make it easier for attendees to find what they're looking for
                  — and make their online ticket purchase seamless.
                </p>
              </div>
            </div>
            <div className="col-md-3 center-div">
              <img src={Four} alt="pic" />
              <div className="sale-ticket-text">
                <h4>Promo codes</h4>
                <p>
                  Grow your following with an online ticketing platform that
                  offers exclusive discounts, limited-time deals, and special
                  access to your event with a quick scan on your attendees'
                  smart device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SaleTools>
      <Reference>
        <div className="container-sm">
          <div className="row">
            <div className="col-md-6">
              <h2>
                <span className="large">"</span>
                <br />
                As someone who completely relies on people buying tickets to
                (our) event to get the word out, Billette plays a huge part in
                my business."
              </h2>
              <p className="mt-2">
                Karim Hojoh, founder of Truth Dance Party and Bollywood Dreams
                Entertainment
              </p>
            </div>
            <div className="col-md-6 ref-img-holder">
              <img className="ref-img" src={refImage} alt="" />
            </div>
          </div>
        </div>
      </Reference>
      <div className="testimonies">
        <div className="center-line"></div>
        <h1>Testimonies</h1>
        <div className="center-line"></div>
      </div>
      <Slider />
      <Footer />
    </Viewport>
  );
}
export default LandingPage;
