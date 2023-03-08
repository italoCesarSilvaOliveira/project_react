import styled from "styled-components";

export const Formulario = styled.div``;

export const RegistroCSS = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
  }

  .label_{
    display: flex;
    flex-direction: column;
    gap: 2px;
    color: white;
  }
  
  input {
    border-radius: 5px;
    border: 1px solid gray;
    height: 30px;
    width: 300px;
  }

  .button {
    display: flex;
    align-itens: center;
    justify-content: center;
    padding: 0 40px 0;
    margin-bottom: 10px;
  }
`;
