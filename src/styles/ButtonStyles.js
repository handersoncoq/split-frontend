import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: #1da1f2;
  font-family: 'League Spartan', sans-serif;
  color: white;
  font-size: 1em;
  font-weight: bold;
  margin-top: 0.5em;
  padding: 0.35em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #0d8cd9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #1064a3;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(29, 161, 242, 0.5);
  }
`;
