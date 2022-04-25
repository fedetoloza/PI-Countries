import styled from "styled-components";
import { Button } from "./Button";
import back from "../statics/back.svg";
import reload from "../statics/reload.svg";


export const Container = styled.div`
  padding: 0.5rem 1.5rem;
  color: var(--text-color);
  min-height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 1rem;
  padding: 1rem 0;
  @media (min-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const BackBtn = styled.button`
  background-image: url(${back});
  background-size: 100%;
  background-repeat:no-repeat;
  background-attachment: scroll;
  background-color: transparent;
  border-color:rgba(255, 255, 255, 0)
  border-style: none;
  border-radius: 50%;
  display: block;
  width: 45px;
  height: 45px;
`;

export const ReloadBtn = styled.button`
background-image: url(${reload});
background-size: 80%;
background-position: center;
background-repeat:no-repeat;
background-attachment: scroll;
background-color: transparent;
font-size: 2.3rem;
border-style: none;
border-radius: 50%;
display: block;
width: 45px;
height: 45px;
`;

export const Info = styled.div`
  border-style: solid;
  border-color: black;
  font-size: 2rem;
  backdrop-filter:  saturate(50%);
  background-color: rgba(70, 74, 81, 0.5);
  border-radius: 1rem;
  width: 100%;
  padding: 1.3rem;
  border-right: 1px solid var(--border-color);

  @media (min-width: 768px) {
    width: 100%;
    
  }
  h1 {
    text-align: center;
    font-size:2.5rem
    }

  div {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: normal;
  }
  span {
    color: #fff2ee;
    font-size: 1.2rem;
    margin: 0;
    font-weight: bold;
  }
`;

export const Activities = styled.div`
  border-style: solid;
  border-color: black;
  text-align: center;
  flex-wrap: wrap;
  row-gap: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter:  saturate(50%);
  background-color: rgba(70, 74, 81, 0.5);
  border-radius: 1rem;
  width: 5rem;
  padding: 1.3rem;
  
  h3 {
    text-align: center;
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const ActDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%
  

  @media (min-width: 500px) {
    flex-wrap: wrap;
  }
`;

export const BtnDetail = styled(Button)``;

export const TopDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (min-width: 500px) {
    img {
      display: block;
      margin: 0.4rem;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
    }
  }
`;
