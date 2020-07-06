import styled from 'styled-components';
import { tablet, mobile } from '../../globalStyle/mediaQueries';

export const TrailerPageContainer = styled.div`
  padding-top: 90px;
  width: 100%;
  height: auto;
  margin: 0;
  ${tablet} {
    width: 100%;
  }
  ${mobile} {
    width: 100%;
  }

  /* .player:focus {
    outline: none;
    border: none;
  } */
`;
