import styled from "styled-components";
import { Button } from "./Button";

export const LandingSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  overflow-y: hidden;
`;

export const Title = styled.div`
  h1 {
    font-size: 2.5rem;
    color: #fffffe;
    text-align: center;
  }
  h2 {
    color: var(--secondary);
    text-align: center;
    font-size: 36px;
  }
`;

export const Btn = styled(Button)`
  width: 100%;
  color: var(--text-color);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: black;
  justify-content: space-between;
  backdrop-filter:  saturate(50%);
  background-color: rgba(7, 25, 40, 0.30); 
  padding: 3rem;
  max-width: 800px;
  text-align: justify;
  p {
    font-size:1.3rem;
    margin: 2rem 0;
    color: var(--text-color);
  }
`;

export const Reference = styled.a`
  text-decoration: underline;
  font: bold;
  margin: 0 0.5rem;
  color: var(--secondary);
`;
