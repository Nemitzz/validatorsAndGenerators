import styled from 'styled-components';

import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;


  a {
    color: #fff;
    border-right: solid 1px #000;
    border-left: solid 1px #000;
    padding-right: 12px;
    padding-left: 12px;
    font-weight: bold;
  }
`;
