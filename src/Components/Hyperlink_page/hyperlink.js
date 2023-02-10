import React from "react";
import './styles.css';
import styled from 'styled-components';

const App = () =>{
  return(
    <div>
      <ContenedorBotones>
      </ContenedorBotones>
    </div>
  );
}

export default App;

const ContenedorBotones = styled.div`
    padding: 40px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;
