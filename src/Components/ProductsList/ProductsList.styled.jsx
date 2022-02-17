import styled from 'styled-components';

export const Products = styled.ul`
  padding: 30px 0px;
  color: var(--main-text-color);
  &[data-listStyle='grid'] {
    display: flex;
    flex-wrap: wrap;
    & > li {
      flex-basis: calc((100% - 4 * 30px) / 5);

      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
`;

export const ProductItem = styled.li`
  display: flex;
  padding: 20px 15px;
  &:nth-child(odd) {
    background-color: var(--second-color);
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
  font-size: 12px;
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding-left: 10px;
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

export const Price = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: var(--price-color);
  text-align: right;
`;
