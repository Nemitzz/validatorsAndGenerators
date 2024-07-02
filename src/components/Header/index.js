import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/validaCPF">
        <span>Validador de CPF</span>
      </Link>
      <Link to="/geraCPF">
        <span>Gerador de CPF</span>
      </Link>
      <Link to="/geraSenha">
        <span>Gerador de senha</span>
      </Link>
    </Nav>
  );
}
