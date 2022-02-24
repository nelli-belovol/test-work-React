import styled from 'styled-components';

export const ProductItem = styled.li`
  display: flex;
  padding: 10px 5px;
  align-items: center;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:nth-child(odd) {
    background-color: var(--second-color);
  }

  @media screen and (min-width: 768px) {
    padding: 20px 15px;
  }
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
  font-size: 6px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding-left: 10px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  padding-top: 8px;
  @media screen and (min-width: 768px) {
    padding-top: 15px;
  }
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-size: 6px;
  font-weight: bold;
  background-color: var(--second-accentcolor);
  border: none;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;

  width: 40px;
  color: var(--main-color);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    width: 90px;
    padding: 10px 5px;
  }
`;

export const DarkButton = styled(Button)`
  background-color: var(--first-accentcolor);
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const ImageEl = styled.div`
  position: relative;
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

export const Price = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: var(--price-color);
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Sale = styled.div`
  position: absolute;
  top: 60%;
  left: -30%;
  text-transform: uppercase;
  font-size: 6px;
  font-weight: bold;
  background-color: rgba(188, 207, 132, 0.8);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  border: none;
  padding: 4px 1px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 10px 5px;
    font-size: 12px;
  }

  @media screen and (min-width: 1200px) {
  }
`;
