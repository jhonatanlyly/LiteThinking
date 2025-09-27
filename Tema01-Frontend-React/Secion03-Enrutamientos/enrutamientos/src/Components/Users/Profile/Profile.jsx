//Verion 7
//import { useParams } from "react-router";

//6.30.1

//Rutas Dinámicas con useParams
import {useParams} from "react-router-dom";

export default function Profile() {
//Obtenemos los parametros de la URL
const {username} = useParams();
return <h1>Perfil de usuario: {username}</h1>;
}