import styled from "styled-components";


export const ContainerPage = styled.div`
  display: block;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem 0;
    span {
      backdrop-filter: saturate(50%);
      background-color: rgba(17, 25, 40, 0.50);
      font-weight: bold;
      color: var(--text-color);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      border-radius: 0.4rem;
      border-style: solid;
      border-color: black;
      margin: 0.2rem;
      min-width: 2rem;
      padding: 0 0.3rem;
      height: 2rem;
      text-decoration: none;
      cursor: pointer;
    }
    span:hover {
      background-color: #ff8906;
      color: #fff;
      
    }
    
  }
`;

export const PrevNext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  width:80%;
  background-color: rgba(17, 25, 40, 0.25);
  padding: 0.4rem;
  border-radius: 1rem;
  span {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-color);
    width: 100%;
  }
  @media {
    display: block;
  }
`;
export const ContPag = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BtnPaged = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  cursor: pointer;
  :hover {
    background-color: #ff8906;
    color: #fff;
  }
  :disabled {
    background-color: #ffb35c;
  }
`;

export const PagedBtns = styled.div`
  display: flex;
  flex-direction: row;
`;


export const NextBtn = styled.button`
  background-color: black;
  color: var(--text-color);
  border-color:rgba(255, 255, 255, 0)
  border-style: transparent;
  border-radius: 0.4rem;
  padding: 0.1rem;
  display: block;
  width: 45px;
  height: 45px;
  :hover {
    background-color: #ff8906;
    color: #fff;
  }
  :disabled {
    background-color: #ffb35c;
  }
`;

export const BckBtn = styled.button`
  background-color: black;
  color: var(--text-color);
  border-color:rgba(255, 255, 255, 0)
  border-style: transparent;
  border-radius: 0.4rem;
  padding: 0.2rem;
  display: block;
  width: 45px;
  height: 45px;
  :hover {
    background-color: #ff8906;
    color: #fff;
  }
  :disabled {
    background-color: #ffb35c;
  }
`;

export const FstPageBtn = styled.button`
  background-color: black;
  color: var(--text-color);
  border-color:rgba(255, 255, 255, 0)
  border-style: transparent;
  border-radius: 0.4rem;
  padding: 0.1rem;
  display: block;
  width: 45px;
  height: 45px;
  :hover {
    background-color: #ff8906;
    color: #fff;
  }
  :disabled {
    background-color: #ffb35c;
  }
`;

export const LstPageBtn = styled.button`
  background-color: black;
  color: var(--text-color);
  border-color:rgba(255, 255, 255, 0)
  border-style: transparent;
  border-radius: 0.4rem;
  padding: 0.1rem;
  display: block;
  width: 45px;
  height: 45px;
  :hover {
    background-color: #ff8906;
    color: #fff;
  }
  :disabled {
    background-color: #ffb35c;
  }
`;