import { Link } from "react-router-dom";

function NoEncontrada(){

    return (

        <section>
            <h2>Página no encontrada</h2>
            <p>La dirección solicitada no existe</p>
            <Link to='/'>Volver al Catálogo</Link>
        </section>

    );


}

export default NoEncontrada