import FichaLibro from "../components/FichaLibro";
import useLibros from "../hooks/useLibros";

function Catalogo() {
    const { Libros: libros, cargando, errorCarga } = useLibros();

    const fichas = libros.map((Libro) =>(
        <FichaLibro
            key= {Libro.id}
            titulo = {Libro.titulo}
            autor = {Libro.autor}
            leido = {Libro.leido}
        /> 
    ));


    return (
        <section>
            <h2>Catálogo de libros</h2>

            {cargando && <p>Cargando libros...</p>}
            {errorCarga && <p role='alert'>Error: {errorCarga}</p>}
            {!cargando && !errorCarga && fichas}

        </section>
    )

};


export default Catalogo;