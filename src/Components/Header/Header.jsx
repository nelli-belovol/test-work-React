import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HeaderEl,
  Wraper,
  Title,
  ModeSwitcher,
  Navigate,
  ButtonGrid,
  DarkButtonList,
} from './Header.styled';

import { IoAppsSharp, IoBag } from 'react-icons/io5';
import { ImList } from 'react-icons/im';

export default function Header({ changeListStyle }) {
  return (
    <>
      <HeaderEl>
        <Wraper>
          <Title>Our products</Title>
          <Navigate>
            <ModeSwitcher>
              <DarkButtonList
                value="line"
                type="button"
                onClick={e => changeListStyle(e.currentTarget.value)}
              >
                <ImList width="100%" fill="var(--main-color)" />
              </DarkButtonList>
              <ButtonGrid
                value="grid"
                type="button"
                onClick={e => changeListStyle(e.currentTarget.value)}
              >
                <IoAppsSharp fill="var(--main-color)" />
              </ButtonGrid>
            </ModeSwitcher>
            <NavLink to="/cart">
              <IoBag
                display="block"
                size="24px"
                fill="var(--price-color)"
                stroke="var(--first-accentcolor)"
                strokeWidth="6"
              ></IoBag>
            </NavLink>
          </Navigate>
        </Wraper>
      </HeaderEl>
    </>
  );
}
