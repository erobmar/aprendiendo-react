import { useState, useEffect } from 'react';

function useLibros() {
  const [Libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState('');

  useEffect(() => {
    let ignorar = false;

    async function cargarLibros() {
      try {
        const respuesta = await fetch('/libros.json');
        if (!respuesta.ok) {
          throw new Error(`Error HTTP ${respuesta.status}`);
        }
      
        const datos = await respuesta.json();

        if (!ignorar){
          setLibros(datos);
        }
      }
      catch (error) {
        if (!ignorar){
          setErrorCarga(error.message);
        }
      }
      finally {
        if (!ignorar){
          setCargando(false);
        }
      }
    }

    cargarLibros();

    return () => {
      ignorar = true;
    };  
  }, []);

  return { Libros, cargando, errorCarga };
}

export default useLibros;