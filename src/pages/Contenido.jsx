import { Outlet, useLocation } from "react-router-dom";

function Contenido(){

    const ubicacion = useLocation();

    return (
        <section>
            <p>Biblioteca personal</p>
            <p>Ruta Actual: {ubicacion.pathname}</p>
            <p>Consulta: {ubicacion.search}</p>
            <p>Fragmento: {ubicacion.hash}</p>
            <Outlet />            
        </section>
    );
}

export default Contenido;