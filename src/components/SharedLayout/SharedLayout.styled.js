import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 20px;
  color: #ffffff;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #61dafb;
  }
  &.active {
    height: 50px;
    border-radius: 10px;
    background-color: lightslategrey;
    box-shadow: inset 0px 5px 5px black;
    color: #61dafb;
  }
`;

export const Header = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 5px 5px black;
  background-color: #282c34;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
