import styled from 'styled-components';

export const CartEl = styled.div`
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

  & > p {
    color: var(--main-text-color);
    &:hover,
    &:focus {
      cursor: pointer;
      color: var(--second-accentcolor);
    }
  }
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 30px 0px;
  color: var(--main-text-color);
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 20px 15px;
  border-bottom: 1px solid var(--second-color);
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 10px;
  width: 250px;
  text-align: left;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: var(--main-text-color);
  font-size: 12px;
`;

export const AddQuantity = styled.div`
  display: flex;
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

export const IncrDecrButton = styled.button`
  background-color: var(--main-color);
  border: none;
  fill: var(--main-text-color);
  cursor: pointer;
`;

export const DarkButton = styled(Button)`
  background-color: var(--first-accentcolor);
`;

export const DelButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  background-color: var(--main-color);
  border: none;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const ImageEl = styled.div`
  width: 66px;
  height: 66px;
  object-fit: cover;
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: var(--price-color);

  padding-left: 20px;
`;

export const PriceTotal = styled(Price)`
  text-align: center;
  color: green;
  margin-bottom: 10px;
`;
export const Wraper = styled.div`
  display: flex;
  align-items: center;
`;
