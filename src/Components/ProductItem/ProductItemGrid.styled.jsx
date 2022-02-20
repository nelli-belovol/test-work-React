import styled from 'styled-components';

export const ProductItem = styled.li`
  display: flex;
  padding: 20px 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-basis: calc(100% / 3 - 20px);
  margin-left: 10px;
  margin-top: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  width: 250px;
  text-align: left;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: var(--main-text-color);
  font-size: 12px;
  padding: 15px 0;
  width: 300px;
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  padding-top: 15px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  background-color: var(--second-accentcolor);
  border: none;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  padding: 10px 5px;
  width: 90px;
  color: var(--main-color);
  cursor: pointer;
`;

export const DarkButton = styled(Button)`
  background-color: var(--first-accentcolor);
  margin-right: 10px;
`;

export const ImageEl = styled.div`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: var(--price-color);
  text-align: center;
`;
