import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 10000;
  /* padding-top: 10px; */
`;

export const Navbar = styled.nav`
  width: 100%;
  max-width: 1244px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
  }

  img {
    height: 50px;
    width: auto;
  }

  h1 {
    font-size: 200%;
    color: white;
  }

  .svg-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  svg {
    width: 30px;
    width: 30px;
    margin-right: 20px;
  }

  svg:hover {
    transform: scale(1.2);
  }
`;
