import styled from 'styled-components';

export const Title = styled.h2`
  text-transform: uppercase;
  color: var(--main-text-color);
  font-size: 24px;
`;

export const ImageEl = styled.div`
  display: flex;
  margin: 20px auto;
  width: 200px;
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ProductText = styled.p`
  width: 200px;
  margin: 10px auto;
  text-align: center;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: var(--price-color);
  text-align: right;
`;
