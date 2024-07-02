import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const Checkbox = styled.h1`
 border-top: solid 1px black;
 display: flex;
 flex-direction: column-reverse;
 margin-bottom: 20px;
 margin-top: 200px;


 input {
  margin-right: 10px;
  padding: 5px;
  border: solid 1px black;
 }

 input[type="number"] {
  max-width: 30px;
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
}
`;

export const Container = styled.section`
  max-width: 700px;
  background: #fff;
  margin: 30px auto;
  text-align: justify;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;
