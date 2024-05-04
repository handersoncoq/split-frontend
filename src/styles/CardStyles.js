import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #1DA1F2;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 85%;
  padding: 1em;
  margin: 1em;
  margin-top: 0;
  padding-top: 0.5em;
`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

export const CardContent = styled.h3`
  padding-left: 0;
  margin-left: 0;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CardTextarea = styled.textarea`
  width: 100%;
  padding: 1em;
  padding-bottom: 0;
  margin-top: 10px;
  border: 1px solid #1da1f2;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: medium;
  resize: none;
  white-space: nowrap;
  overflow-x: auto;
  &:focus {
    outline: 3px solid rgba(29, 161, 242, 0.5);
    border: none;
  }
  &::placeholder {
    color: #ccc;
    font-size: medium;
  }
`;
