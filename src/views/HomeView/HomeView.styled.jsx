import styled from 'styled-components';

export const HomeViewStyle = styled.div`
  text-transform: uppercase;
  color: var(--main-color);
  font-size: 46px;

  & > a {
    color: var(--main-color);
    &: hover, 
    &: focus{
        color: var(--second-accentcolor)
    }
  }
`;