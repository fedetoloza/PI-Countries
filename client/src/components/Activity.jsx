import React from "react";
import styled from "styled-components";

export default function Activity({ name, difficulty, duration, season }) {
  return (
    <Activities>
      <h2>{name}</h2>
      <div>
        <span>Difficulty:</span>
        {difficulty}
      </div>
      <div>
        <span>Duration:</span>
        {duration} 
      </div>
      <div>
        <span>Season:</span>
        {season}
      </div>
      <hr />
    </Activities>
  );
}

const Activities = styled.div`
  h2 {
    margin: 0.3rem 0;
    text-align: center;
    text-decoration: underline;
  }
  width: 50%;
  div {
    margin: 0.8rem;
    display: flex;
    justify-content: space-between;
  }
  span {
    color: #fff2ee;
    font-size: 1.2rem;
    margin: 0;
    font-weight: bold;
  }
`;
