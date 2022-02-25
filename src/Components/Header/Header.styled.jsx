import styled from 'styled-components';

export const HeaderEl = styled.header`
  max-width: 100%;

  padding: 15px 0;
  text-align: center;

  border-bottom: 2px solid var(--second-color);
`;

export const ModeSwitcher = styled.div`
  margin-right: 10px;
  & > a:not(:last-child) {
    margin-right: 5px;
  }
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  color: var(--main-text-color);
`;

export const Title = styled.h1`
  color: var(--main-text-color);
`;

export const ButtonGrid = styled.button`
  background-color: var(--second-accentcolor);
  border: none;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 2px;

  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const DarkButtonList = styled(ButtonGrid)`
  background-color: var(--first-accentcolor);
  margin-right: 3px;
`;
