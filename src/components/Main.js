import styled from 'styled-components';

export const ContainerPage = styled.div`
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.container-main {
  background-color: rgba(111, 111, 111, 0.5);
  border-radius: 15px;
  padding: 10px;
}

.title {
  font-size: 85px;
  color: #FFF;
  margin: 10px;
  animation: flip_title 2s;
}

@keyframes flip_title {
  from{
    transform: rotateX(90deg);
  } to {
    transform: rotateX(0deg);
  }
}

.button {
  background-color: #4286f4;
  margin: 3px 0 ;
  padding: 15px 100px;
  border-radius: 15px;
  border: 0;
  cursor: pointer;
  transition: .25s;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
}

.button:hover {
  background-color: #E94057;
  transition: .25s;
}

.imagem {
  margin: 9px;
}

.esconder {
  visibility: hidden;
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 40px;
  }
  
}
`;