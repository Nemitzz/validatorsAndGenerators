import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';
import GeraCPF from '../../script/geraCPF';

export default function GeradorCPF() {
  const [cpfGerado, setCpfGerado] = React.useState('');

  function handleClick(e) {
    e.preventDefault();
    const gerador = new GeraCPF();
    const cpfGerado = gerador.geraCPF();
    setCpfGerado(cpfGerado);
    console.log(cpfGerado);
    return cpfGerado;
  }

  return (
    <Container>
      <Title>Gerador de CPF</Title>
      {cpfGerado ? <Title>{cpfGerado}</Title> : <Title>000.000.000-00</Title>}

      <button type="button" onClick={handleClick}>
        GERAR
      </button>
    </Container>
  );
}
