import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

/*
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador",
  nombreCompleto: function() {
    return `${this.nombre}, ${this.edad} ,${this.profesion}`;
  }
}
const saludo = <h1>Nombre Completo: {persona.nombreCompleto()}</h1>;
*/

function Saludo(props){
  return <h1>Nombre Completo: {props.nombre} {props.apellido} {props.edad} {props.profesion} </h1>;
}

console.log(persona.nombreCompleto());

const elemento = <Saludo nombre="Juan" apellido="Perez" edad="30" profesion="Desarrollador"  />;

root.render(
<>
{/* <h1 style={{"color":"red"}}>Hola Mundo </h1> {saludo} */}
<h1 style={{"color":"red"}}>Hola Mundo </h1> {elemento} 
</>
);
