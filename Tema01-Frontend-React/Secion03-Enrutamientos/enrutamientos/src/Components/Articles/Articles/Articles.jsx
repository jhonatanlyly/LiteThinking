import { Outlet, Link } from "react-router-dom";

export default function Articles() {
    return(
        <div>
            <h1>Articulos</h1>
            <nav>
                <Link to="/articles/1">Articulo 1</Link> | {" "}
                <Link to="/articles/2">Articulo 2</Link> | {" "}
                <Link to="/articles/3">Articulo 3</Link>
            </nav>
            {/*Renderizado de las Rutas Hijas*/}
            <Outlet />
        </div>
    );
}