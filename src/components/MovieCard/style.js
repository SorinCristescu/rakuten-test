import styled from 'styled-components';
import { tablet } from '../../globalStyle/mediaQueries';

export const Card = styled.div`
  width: 140px;
  height: 250px;
  ${tablet} {
    width: 80%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
  > p {
    text-align: center;
    color: yellow;
    font-size: 20px;
    padding: 40px;
  }
  ${tablet} {
    width: 80%;
  }
`;

export const CardBody = styled.div`
  width: 140px;
  height: 210px;
  position: relative;
  &:hover {
    border: 3px solid #fdeb48;
  }
  > img {
    display: block;
    width: 100%;
    height: 100%;
  }
  > img:hover {
    width: 140px;
    height: 210px;
  }
`;

export const CardFooter = styled.div`
  height: 30px;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  > p {
    width: 30px;
    height: 15px;
    font-size: 16px;
    color: #ffffff;
  }
`;

export const Votes = styled.p`
  color: #fdeb48 !important;
`;

export const Score = styled.p``;

export const MovieTitle = styled.h2`
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  margin-top: 15px;
  margin-bottom: 15px;
`;
