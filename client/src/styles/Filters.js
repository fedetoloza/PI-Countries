import styled from "styled-components";

export const Filter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  select {    
    width: 100%;
    cursor: pointer;
    padding: 7px 10px;
    border: none;
    background: #f0f0f0;
    font-size: 1.1rem;
    margin: 0rem 0;
    color: var(--background-color);
    font-family: "Quicksand", sans-serif;
    border: 2px solid rgba(145, 145, 233, 0.5);
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 2.5rem;
    select {
      margin: 0;
      width: 200px;
    }
  }
`;
