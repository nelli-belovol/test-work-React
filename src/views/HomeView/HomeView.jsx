import React from 'react';
import { NavLink } from 'react-router-dom';
// import { HomeViewStyle } from './HomeView.styled';

export default function HomeView() {
  return (
    // <HomeViewStyle>
    <NavLink to="/products" className="">
      Welcome to our store
    </NavLink>
    // </HomeViewStyle>
  );
}
