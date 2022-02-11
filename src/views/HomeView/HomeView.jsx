import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomeView() {
  return (
    <NavLink to="/products" className="">
      Welcome to our store
    </NavLink>
  );
}
