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
  padding: 10px 0px;
  color: var(--main-text-color);
  @media screen and (min-width: 768px) {
    padding: 30px 0px;
  }
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 5px 15px;
  border-bottom: 1px solid var(--second-color);

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px 15px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  width: 250px;
  text-align: left;
  @media screen and (min-width: 768px) {
    padding-left: 10px;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: var(--main-text-color);
  font-size: inherit;
`;

export const AddQuantity = styled.div`
  display: flex;
  margin-top: 10px;
  & > span {
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const IncrDecrButton = styled.button`
  background-color: var(--main-color);
  border: none;
  fill: var(--main-text-color);
  cursor: pointer;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const DelButton = styled.button`
  position: absolute;
  top: 10px;
  right: -3px;
  width: 8px;
  height: 8px;
  background-color: var(--main-color);
  border: none;

  &:hover,
  &:focus {
    cursor: pointer;
  }
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    margin-right: 10px;
  }
`;

export const ImageEl = styled.div`
  width: 50px;
  height: 50px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 110px;
  }

  @media screen and (min-width: 1200px) {
    width: 120px;
    height: 120px;
  }
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Price = styled.p`
  font-weight: bold;

  color: var(--price-color);
  text-align: right;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const PriceTotal = styled(Price)`
  text-align: center;
  color: green;
  margin-bottom: 10px;
`;
export const Wraper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  & > p {
    width: 50px;
    @media screen and (min-width: 768px) {
      width: 70px;
    }
  }
`;
