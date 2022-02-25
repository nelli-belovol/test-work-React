import styled from 'styled-components';

export const ProductsDetailsEl = styled.div`
  border-radius: 5px;
  background-color: var(--main-color);
  padding: 8px 10px;
  min-width: 300px;
  margin: 0 auto;
  font-size: 14px;

  @media screen and (min-width: 480px) {
    padding: 12px 17px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 18px 24px;
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    padding: 25px 30px;
    font-size: 24px;
  }
`;

export const NavigateEl = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 15px 0;
  text-align: center;
  border-bottom: 2px solid var(--second-color);
`;
