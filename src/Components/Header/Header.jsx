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

export default function Header() {
  const [listStyle, setListStyle] = useState('line');

  const toggleListStyle = e => {
    const button = e.currentTarget.innerHTML;
    console.log(button.includes('list'));
    button.includes('list') ? setListStyle('line') : setListStyle('grid');
  };
  useEffect(() => {
    const list = document.querySelector('ul');
    list.setAttribute('data-listStyle', listStyle);
  }, [listStyle]);
  return (
    <>
      <HeaderEl>
        <Wraper>
          <Title>Our products</Title>
          <Navigate>
            <ModeSwitcher onClick={toggleListStyle}>
              <DarkButton id="list" type="button">
                <ImList width="100%" fill="var(--main-color)" />
              </DarkButton>
              <Button type="button">
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
