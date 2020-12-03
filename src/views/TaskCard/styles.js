import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const ImageStyled = styled.div`
  > img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
`;

export const TypographyStyled = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;
  margin: 16px;
  > p {
    font-size: 15px;
    letter-spacing: normal;
    font-weight: 400;
  }
`;

export const DateStyled = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;
  line-height: 19.7px;
  color: rgb(170, 184, 194);
  > p {
    font-size: 15px;
    letter-spacing: normal;
    font-weight: 400;
  }
`;

export const CardStyled = styled(Card)`
  background-color: #ffffff;
  &:hover {
    cursor: pointer;  
    background-color: #fbfbfb;
    transition: background-color 0.2s;    
  }
`;

export const FooterStyled = styled.div``;
