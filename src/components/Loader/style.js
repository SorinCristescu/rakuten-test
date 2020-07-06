import styled, { keyframes } from 'styled-components';

const spinnerLoader = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${spinnerLoader} infinite 3s linear;
  }
`;
