import styled from "styled-components";
import search from "../statics/search.png";

export const Search = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 0.3rem 0.5rem;
  margin: 1rem 0;
  font-size: 1.2em;
  height: 2.5rem;
  border-radius: 0.75rem;
  width: 100%;

  input {
    background-color: rgba(255, 255, 255, 0.25);
    align-items: center;
    border: none;
    outline: none;
    margin-right: 0.5rem;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
    padding: 7px 10px;
    font-size: 1rem;
    font-family: "Quicksand", sans-serif;
  }
`;
export const IconSearch = styled.button`
  background-image: url(${search});
  background-size: 100%;
  background-repeat:no-repeat;
  background-attachment: scroll;
  background-color: transparent;
  border-style: none;
  border-radius: 50%;
  display: block;
  width: 30px;
  height: 30px;
`;

