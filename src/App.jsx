import Cabecera from './components/Cabecera'
import Suscripcion from './components/Suscripcion';
import { TemaContext } from './contexts/TemaContext';
import { useState } from 'react';
import Catalogo from './pages/Catalogo';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contenido from './pages/Contenido';
import DetalleLibro from './pages/DetalleLibro';
import NoEncontrada from './pages/NoEncontrada';
import { AuthContext } from './contexts/AuthContext';
import RutaPrivada from './components/RutaPrivada';
import Perfil from './pages/Perfil';
import Login from './pages/Login';

function App() {

  const asignatura = "04 - FullStack";
  const numerotema = 2;
  
  const [tema, setTema] = useState('claro');
  const [usuario, setUsuario] = useState(null);

  function alternarTema(){
    setTema(anterior => anterior === 'claro' ? 'oscuro' : 'claro');
  }


  return (
    <AuthContext.Provider value={{ usuario, setUsuario }}>
      <TemaContext.Provider value={{ tema, alternarTema }}>
        <BrowserRouter>
          <main>
            <button type="button" onClick={alternarTema}>Cambiar modo visual</button>
            <Cabecera titulo="Mi primera aplicación con React" />
            <Cabecera titulo={`Tema ${numerotema} de la asignatura ${asignatura}`} />
            <Cabecera titulo="Estoy leyendo" />

            <nav>
              <Link to="/">Catálogo</Link>

              {' | '}

              <Link to="/suscripcion">Suscripción</Link>
            </nav>  

            <Routes>
              <Route path="/" element={<Contenido />}>
                <Route path="/" element={<Catalogo />} />
                <Route path="/suscripcion" element={<Suscripcion />} />
                <Route path="libros/:id" element={<DetalleLibro /> }/>
                <Route path='*' element={<NoEncontrada />} />
                <Route path='perfil' element={
                  <RutaPrivada>
                    <Perfil />
                  </RutaPrivada>
                }/>
                <Route path='login' element={<Login />} />
              </Route>
            </Routes>

            <p>Estoy aprendiendo a construir interfaces con componentes.</p>

          </main>
        </BrowserRouter>
      </TemaContext.Provider>
    </AuthContext.Provider>
  )
}

export default App