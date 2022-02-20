import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeViewStyle } from './HomeView.styled';
import { Container } from '../Container.styled';
export default function HomeView() {
  return (
    <Container>
      <HomeViewStyle>
        <NavLink to="/products" className="">
          Welcome to our store
        </NavLink>
      </HomeViewStyle>
    </Container>
  );
}
