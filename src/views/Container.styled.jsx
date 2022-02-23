import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 10px auto;
  text-align: center;

  @media screen and (min-width: 480px) {
    max-width: 400px;
  }

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  }
`;
