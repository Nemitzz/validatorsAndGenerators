import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Form, Icon } from './styled';
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';
import CPFValido from '../../script/validaCPF';

export default function ValidaCPF() {
  const [cpf, setCPF] = React.useState('');
  const [isValid, setIsValid] = React.useState(null);

  function handleClick(e) {
    e.preventDefault();
    const valida = new CPFValido(cpf);
    const isValid = valida.valida();
    setIsValid(isValid);
    return isValid;
  }

  return (
    <Container>
      <Title>Validador de CPF</Title>
      <Form>
        <label htmlFor="validaCPF">
          Digite o CPF:
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
          <Icon>
            {isValid ? (
              <FaUserCheck size={24} color="green" />
            ) : (
              <FaUserTimes size={24} color="red" />
            )}
          </Icon>
        </label>
      </Form>
      <button type="button" onClick={handleClick}>
        VALIDAR
      </button>
    </Container>
  );
}
