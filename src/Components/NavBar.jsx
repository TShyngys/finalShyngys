import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Blacklogo from "./images/grey-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Hamburger from "./Hamburger";
import { motion, useAnimation } from "framer-motion";

function NavBar() {
  const navigate = useNavigate();

  const animation = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        animation.start({
          backgroundColor: "white",
          transition: {
            duration: 1,
          },
        });
      } else {
        animation.start({
          backgroundColor: "transparent",
          transition: {
            duration: 1,
          },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Nav animate={animation}>
      <div className="container-sm flex-container">
        <Hamburger color={"#303030"} />
        <NavMiddleLinks>
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
            onClick={() => {
              navigate("/billette/get-ticket");
            }}
          >
            Pricing
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.4,
            }}
            onClick={() => {
              navigate("/billette/get-ticket");
            }}
          >
            Events Catelogue
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.8,
            }}
            onClick={() => {
              navigate("/billette/get-ticket");
            }}
          >
            Resources
          </motion.div>
        </NavMiddleLinks>
        <NavLogoContainer>
          <Navlogo
            src={Blacklogo}
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 2.5,
            }}
            onClick={() => {
              navigate("/billette");
            }}
          />
        </NavLogoContainer>
        {<NavButton fontColor={"#3030303"}  >
          <Link to="/cruds">Contact</Link></NavButton>}
      </div>
    </Nav>
  );
}
const Nav = styled(motion.div)`
  z-index: 10;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 80px;
  /* background-color: ${(props) => props.color}; */
  /* background-color: ""; */
  padding: 0px 40px;
  /* border-bottom: ${(props) => props.bottomBorder}; */

  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
`;

const NavLogoContainer = styled.div`
  width: 130px;
  position: relative;
  cursor: pointer;
`;
const Navlogo = styled(motion.img)`
  width: 100%;
  position: relative;
`;
const NavButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  font-size: 21px;
  width: auto;
  color: #303030;
  padding: 2px 2px;
  border: none;
  cursor: pointer;
  position: relative;
  font-weight: bolder;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(1, 0.2, 0.5, 1);

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
    background-color: #303030;
    transform: translateX(-120%);
    transition: all 0.5s cubic-bezier(1, 0.2, 0.5, 1);
  }

  :hover {
    ::before {
      transform: translateX(0%);
      transition: all 0.5s cubic-bezier(1, 0.2, 0.5, 1);
    }
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const NavMiddleLinks = styled.div`
  display: flex;
  justify-content: center;
  * {
    margin: 0px 10px;
    font-weight: bolder;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    :hover {
      color: #16ce72;
      transition: all 0.2s ease-in-out;
    }
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
export default NavBar;
