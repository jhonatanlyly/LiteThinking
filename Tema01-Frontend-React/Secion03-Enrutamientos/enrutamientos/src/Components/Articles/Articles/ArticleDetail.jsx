import { useParams } from "react-router-dom";

export default function ArticleDetail() {
    //Obtenemos los parametros de la URL
    const { id } = useParams();
    return <h3>Detalle del Articulo: {id}</h3>;
}