import styled from 'styled-components';

export const Title = styled.h2`
  text-transform: uppercase;
  color: var(--main-text-color);
`;

export const ImageEl = styled.div`
  position: relative;
  width: 150px;
  height: auto;

  margin: 10px auto;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: auto;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
    height: auto;
  }
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ProductText = styled.p`
  margin: 0px auto 10px auto;
  font-style: italic;
  text-align: center;
  width: 150px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const Price = styled.span`
  font-weight: bold;

  color: var(--price-color);
  text-align: right;
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
