import styled from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase;
  font-size: 6px;
  font-weight: bold;
  background-color: var(--second-accentcolor);
  border: none;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  padding: 5px 5px;
  width: 50px;
  color: var(--main-color);
  cursor: pointer;

  @media screen and (min-width: 480px) {
    font-size: 8px;
    padding: 7px 5px;
    width: 70px;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 5px;
    width: 80px;
  }
`;

export const DarkButton = styled(Button)`
  background-color: var(--first-accentcolor);
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const AddButton = styled(Button)`
  margin-left: 10px;
`;
