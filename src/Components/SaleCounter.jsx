import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

function SaleCounter({ amount }) {
  const [count, setCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const increment = async () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    } else {
      setCount(0);
    }
  };
  useEffect(() => {
    if (isNaN(amount)) {
      setTotalAmount("Free");
    }
    if (!isNaN(amount)) {
      setTotalAmount(count * amount);
    }
  }, [count, totalAmount, amount]);

  return (
    <Counter>
      <div className="holder">
        <div
          onClick={() => {
            decrement();
          }}
          className="decrement"
        >
          -
        </div>
        <div className="value">{count}</div>

        <div
          onClick={() => {
            increment();
          }}
          className="increment"
        >
          +
        </div>
        <div className="no-border">
          <small>
            {!isNaN(amount) && "₦"}
            {totalAmount}
          </small>
        </div>
      </div>
      <button>Purchase</button>
    </Counter>
  );
}
const Counter = styled.div`
  margin-top: 10px;
  max-width: 200px;
  padding: 0px 10px;

  .increment,
  .decrement {
    :hover {
      color: #16ce72;
    }
  }
  .holder {
    width: 200px;
    display: flex;
    justify-content: space-between;
    div {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 0px;
      background-color: #f7f7f7;
      cursor: pointer;

      border: solid 2px #353535;
      border-right: none;
      font-weight: bolder;
      :nth-child(3) {
        border-right: solid 2px #353535;
      }
      :nth-child(2) {
        cursor: auto;
      }
    }
    .no-border {
      border: none;
      margin-left: 10px;
      background-color: none;
    }
  }
  button {
    margin: 10px;
    color: white;
    padding: 4px 10px;
    border: none;
    background-color: #16ce72;
    transition: all 0.1s;

    :hover {
      background-color: white;
      color: #16ce72;
      transition: all 0.1s;
    }
  }
  small {
    opacity: 0.5;
  }
`;
export default SaleCounter;
