import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState ('');
  const [nmr, setNmr] = useState (0);
  const [contactos, setContactos] = useState ([]);

  const AgregarContacto = ( )=> {
    const nuevoContacto = {nombre, nmr}
    setContactos ([...contactos, nuevoContacto]);
    console.log(contactos);
  };

  return (
    <>
    <h4>Agenda personal :D</h4>
    <div className='inputs'>
      <input onChange={(Nombre)=> setNombre(Nombre.target.value)} type="text" />
      <input onChange={(Nmr)=> setNmr(Nmr.target.value)} type="number" />
    </div>
    <button onClick={AgregarContacto}>Agendar</button>
    </>
  )
}

export default App
