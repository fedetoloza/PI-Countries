import styled from "styled-components";
import { LinkTo } from "./Link";

export const CardContainer = styled.div`
  width: 450px;
  backdrop-filter: saturate(50%);
  background-color: rgba(17, 25, 40, 0.50);
  border-radius: 15rem 0.5rem 12rem 0.8rem;
  border-style: solid;
  transition: all 0.3s 0s ease;
  img {
    width: 100%;
    height: 200px;
    border-radius: 0.5rem 15rem 0.8rem 12rem;
  }
  :hover {
    transform: translate(0, -10px);
  }
`;

export const CardDetails = styled(LinkTo)`
  color: var(--text-color);
`;

export const CardInfo = styled.div`
  margin-top: 0;
  padding: 1rem;
  border-radius: 0 0 0.5rem 0.5rem;
  height: 150px;
  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: normal;
    span {
      font-weight: bold;
    }
  }
`;
