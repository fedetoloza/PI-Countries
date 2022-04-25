import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: left;
  gap:0.5rem;
  flex-wrap: wrap;
  h2 {
    font-size: 1.6rem;
    color: var(--text-color);
  }
`;

export const Container = styled.div`
  
  justify-content: column:
  h1 {
    width: 100%
    font-size: 1.6rem;
    color: var(--text-color);
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-bottom: 1rem;
  
  h1 {
    border-style: solid;
    border-color: black;
    justify-content: center;
    width: 65%;
    text-align: center;
    background-color: rgba(17, 25, 40, 0.50);
    padding: 0.4rem;
    font-size: 1.6rem;
    color: var(--text-color);
  }
`;
