import { useState, useContext, useEffect } from 'react'
import { TemaContext } from '../contexts/TemaContext'
import './FichaLibro.css'

function FichaLibro( props ){

    const { tema, alternarTema } = useContext(TemaContext);

    useEffect(() =>{
        document.title = `Biblioteca - Tema ${tema}`;

        console.log('Efecto iniciado para ', tema);

        return () => {
            console.log('Limpieza de efecto para ', tema);
        };
    }, [tema]);

    const [lectura, setLectura] = useState({
        leido: props.leido,
        favorito: false,
    });

    function toggleFavorito(){
        setLectura(anterior => ({
            ...anterior,
            favorito: !anterior.favorito,
        }))
    }

    function toggleLectura(){
        setLectura(anterior =>({
            ...anterior,
            leido: !anterior.leido,
        }));
    }

    return (
        <article className={`ficha-libro ${tema}`}>
            <p>Tema visual: {tema}</p>
            <h1>{props.titulo}</h1>
            <hr />
            <button type="button" onClick={alternarTema}> Cambiar tema desde ficha</button>
            <button type="button" onClick={toggleLectura}>{lectura.leido? "Marcar como no leído" : "Marcar como leído"}</button>
            <p>{props.autor}</p>
            <p>{lectura.leido ? "Leído" : "Pendiente"}</p>
            {!lectura.leido && <p>Busca un rato para leer</p>}
            <p>{lectura.favorito ? '* Favorito' : '  No favorito'}</p>
            <button type="button" onClick={toggleFavorito}>{lectura.favorito? "Quitar de favorito" : "Añadir a favorito"}</button>
        </article>
    )
}

export default FichaLibro