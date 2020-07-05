import styled from 'styled-components';
import { tablet, mobile, laptop } from '../../globalStyle/mediaQueries';

export const CarouselContainer = styled.div`
  padding: 30px auto;
`;

export const CarouselTitle = styled.h2`
  text-align: center;
  color: #ffe403;
  ${mobile} {
    font-size: 1rem;
  }
`;

export const CarouselBody = styled.div`
  width: 80%;
  margin: 20px auto;
  ${laptop} {
    width: 80%;
  }
  ${tablet} {
    width: 80%;
  }
  ${mobile} {
    width: 60%;
  }
`;
