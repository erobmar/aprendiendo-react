import { useParams } from "react-router-dom";
import useLibros from "../hooks/useLibros";

function DetalleLibro(){

    const { id } = useParams();
    const { Libros: libros, cargando, errorCarga } = useLibros();

    if (cargando){
        return <p>Cargando libro</p>
    }

    if (errorCarga){
        return <p role="alert"> Error: {errorCarga}</p>
    }

    const libro = libros.find(libro => libro.id === Number(id));

    if (!libro){
        return <p>Libro no encontrado</p>
    }

    return (

        <section>
            <h2>{libro.titulo}</h2>
            <p>{libro.autor}</p>
        </section>

    );

}

export default DetalleLibro