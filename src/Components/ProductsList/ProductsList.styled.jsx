import styled from 'styled-components';

export const Products = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  color: var(--main-text-color);

  &[data-listStyle='grid'] {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {
      padding: 30px 0px;
      margin-left: -10px;
      margin-top: -10px;
    }
  }
`;
