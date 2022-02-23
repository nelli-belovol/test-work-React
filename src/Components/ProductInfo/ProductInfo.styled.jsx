import styled from 'styled-components';

export const Title = styled.h2`
  text-transform: uppercase;
  color: var(--main-text-color);
`;

export const ImageEl = styled.div`
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
