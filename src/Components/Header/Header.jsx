import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HeaderEl,
  Wraper,
  Title,
  ModeSwitcher,
  Navigate,
  Button,
  DarkButton,
} from './Header.styled';

import { IoAppsSharp, IoTrash, IoBag } from 'react-icons/io5';
import { ImList } from 'react-icons/im';

export default function Header({ changeListStyle }) {
  return (
    <>
      <HeaderEl>
        <Wraper>
          <Title>Our products</Title>
          <Navigate>
            <ModeSwitcher>
              <DarkButton
                value="line"
                type="button"
                onClick={e => changeListStyle(e.currentTarget.value)}
              >
                <ImList width="100%" fill="var(--main-color)" />
              </DarkButton>
              <Button
                value="grid"
                type="button"
                onClick={e => changeListStyle(e.currentTarget.value)}
              >
                <IoAppsSharp fill="var(--main-color)" />
              </Button>
            </ModeSwitcher>
            <NavLink to="/cart">
              <IoBag
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
