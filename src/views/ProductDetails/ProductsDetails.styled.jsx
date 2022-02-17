import styled from 'styled-components';

export const ProductsDetailsEl = styled.div`
  border-radius: 5px;
  background-color: var(--main-color);
  padding: 25px 30px;
`;

export const HeaderEl = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 15px 0;
  text-align: center;
  border-bottom: 2px solid var(--second-color);
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  background-color: var(--second-accentcolor);
  border: none;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  padding: 10px 0px;
  width: 90px;
  color: var(--main-color);
  cursor: pointer;
`;

export const AddButton = styled(Button)`
  margin-left: 10px;
`;
