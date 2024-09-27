'use client'

import { useState } from "react";
import ContadorDisplay from '../../../components/ContadorDisplay';
import Botao1 from '../../../components/Botao1';

export default function contador() {
  const estilo = {
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const [num, setNum] = useState(0);

  function inc(){
    setNum(num+1)
  }

  function dec(){
    setNum(num-1)
  }

  return (
    <div style={estilo}>
      <h1>Contador</h1>
      <ContadorDisplay numero={num}/>
      <div>
        <Botao1 label={"+"} funcao={inc}/>
        <Botao1 label={"-"} funcao={dec}/>
      </div>
    </div>
  );
}
