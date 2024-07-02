import React from 'react';

import { Container, Checkbox, Title, ErrorMessage } from './styled';
import geraSenha from '../../script/geraSenha';

export default function GeradorDeSenha() {
  const [senhaGerada, setSenhaGerada] = React.useState('');
  const [qtdCaracteres, setQtdCaracteres] = React.useState(10); // Valor padrão de 10 caracteres
  const [chkMaiuscula, setChkMaiuscula] = React.useState(false);
  const [chkMinuscula, setChkMinuscula] = React.useState(false);
  const [chkNumero, setChkNumero] = React.useState(false);
  const [chkSimbolos, setChkSimbolos] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  function handleClick(e) {
    e.preventDefault();

    if (!chkMaiuscula && !chkMinuscula && !chkNumero && !chkSimbolos) {
      setErrorMessage('Por favor, marque pelo menos uma opção abaixo.');
      return;
    }

    const senha = geraSenha(
      qtdCaracteres,
      chkMaiuscula,
      chkMinuscula,
      chkNumero,
      chkSimbolos,
    );
    setSenhaGerada(senha);
    return;
  }

  return (
    <Container>
      <Title>Gerador de senha</Title>
      <Title>{senhaGerada || 'Marque as caixas abaixo e gere sua senha'}</Title>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Checkbox>
        <label>
          <input
            type="number"
            value={qtdCaracteres}
            onChange={(e) => setQtdCaracteres(e.target.value)}
          />
          Quantidade de caracteres
        </label>

        <label>
          <input
            type="checkbox"
            checked={chkMaiuscula}
            onChange={(e) => setChkMaiuscula(e.target.checked)}
          />
          Letras maíusculas
        </label>

        <label>
          <input
            type="checkbox"
            checked={chkMinuscula}
            onChange={(e) => setChkMinuscula(e.target.checked)}
          />
          Letras minúsculas
        </label>

        <label>
          <input
            type="checkbox"
            checked={chkNumero}
            onChange={(e) => setChkNumero(e.target.checked)}
          />
          Números
        </label>

        <label>
          <input
            type="checkbox"
            checked={chkSimbolos}
            onChange={(e) => setChkSimbolos(e.target.checked)}
          />
          Símbolos
        </label>
      </Checkbox>

      <button type="button" onClick={handleClick}>
        GERAR
      </button>
    </Container>
  );
}
