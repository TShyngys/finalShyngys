import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../App.css";
// ... (previous imports)

// ... (previous imports)

function Hamburger({ color }) {
  return (
      <HamBurger BackgroundColor={color}>
        <nav role="navigation">
          <div id="menuToggle" className="toggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <Dlinks to="/billette/get-ticket">
                <li>Pricing</li>
              </Dlinks>
              <Dlinks to="/billette/get-ticket">
                <li>Event Catalogue</li>
              </Dlinks>
              <Dlinks to="/billette/get-ticket">
                <li>Resources</li>
              </Dlinks>
              <Dlinks to="/billette/get-ticket">
                <li>Contact</li>
              </Dlinks>
            </ul>
          </div>
        </nav>
      </HamBurger>
  );
}

// ... (remaining code)


// ... (remaining code)

const HamBurger = styled.div`
  padding: 0px;
  margin: 0px;
  position: relative;
  top: 0px;
  display: none;

  .toggle {
    span {
      background: ${(props) => props.BackgroundColor};
    }
  }
  @media screen and (max-width: 992px) {
    display: block;
  }
`;
const Dlinks = styled(NavLink)`
  li {
    text-decoration: none;
    color: #303030bc;
    transition: color 0.3s ease;
  }
  :hover {
    li {
      color: #16ce72;
    }
  }
  &.active {
    color: #303030;
  }
`;
export default Hamburger;
