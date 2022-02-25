import styled from 'styled-components';

export const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 15px;
  align-items: center;
  width: 100%;
  margin: 10px auto;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  @media screen and (min-width: 480px) {
    margin: 10px auto;
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2 - 10px);

    margin-left: 10px;
    margin-top: 10px;
    margin-right: 0px;
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 3 - 10px);
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: left;

  width: 115px;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 480px) {
    width: 100px;

    margin: 10px auto;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: var(--main-text-color);
  font-size: inherit;
  padding: 15px 0;
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  padding-top: 15px;
`;

export const ImageEl = styled.div`
  position: relative;
  width: 100px;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 480px) {
    margin: 10px 0;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
    height: 300px;
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
  color: var(--price-color);
  text-align: center;
`;

export const Sale = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  text-transform: uppercase;

  font-weight: bold;
  background-color: rgba(188, 207, 132, 0.8);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  border: none;
  padding: 4px 1px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 10px 5px;
  }
`;
