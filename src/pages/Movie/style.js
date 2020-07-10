import styled from 'styled-components';
import {
  mobile,
  tablet,
  laptopXL,
  desktop,
  laptop,
} from '../../globalStyle/mediaQueries';

export const ContainerInner = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;

  position: relative;
  ${desktop} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
  }
  ${laptopXL} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
  }
  ${laptop} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
  }

  ${tablet} {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
  ${mobile} {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
  }

  .main-content {
    padding: 15px;
    align-self: center;
    display: flex;
    flex-direction: column;

    ${desktop} {
      flex-basis: 50%;
      order: 1;
    }
    ${laptopXL} {
      flex-basis: 50%;
      order: 1;
    }
    ${laptop} {
      flex-basis: 50%;
      order: 1;
    }
    ${tablet} {
      flex-basis: 100%;
      order: 2;
    }
    ${mobile} {
      flex-basis: 100%;
      order: 2;
    }
  }

  .main-headings {
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
  }

  .by-line {
    width: 60%;
    font-size: 70%;
    border-bottom: 1px solid grey;
  }

  .heading {
    margin-left: 80px;
  }

  .heading1,
  .heading2 {
    font-size: 300%;
    font-weight: normal;
    letter-spacing: 2px;
  }

  .heading1 {
    margin-left: 50px;
  }

  .actors-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .actors-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .list-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .actors-image {
    width: 40px;
    height: auto;
    margin: 15px;
  }

  .name {
    font-size: 8px;
  }
`;

export const ImageWrapper = styled.div`
  ${desktop} {
    flex-basis: 50%;
    order: 2;
  }
  ${laptopXL} {
    flex-basis: 50%;
    order: 2;
  }
  ${laptop} {
    flex-basis: 50%;
    order: 2;
  }
  ${tablet} {
    flex-basis: 100%;
    order: 1;
  }
  ${mobile} {
    flex-basis: 100%;
    order: 1;
  }

  a {
    text-decoration: none;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
  position: relative;

  .overlay {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }

  &:hover .overlay {
    opacity: 0.5;
    background-color: yellow;
  }
`;

export const Description = styled.div`
  width: 60%;
  /* margin-top: -30px;
  margin-left: 90px; */
`;

export const MoreInfo = styled.div`
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  align-self: flex-start;
  overflow: hidden;
`;
