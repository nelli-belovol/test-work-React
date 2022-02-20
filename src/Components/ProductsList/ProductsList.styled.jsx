import styled from 'styled-components';

export const Products = styled.ul`
  padding: 30px 0px;
  color: var(--main-text-color);
  &[data-listStyle='grid'] {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-top: -10px;
  }
`;
