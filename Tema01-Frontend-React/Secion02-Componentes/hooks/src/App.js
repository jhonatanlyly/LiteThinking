import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [showMessage, setShowMessage] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('guest'); // 'guest', 'user', 'admin'
  const [count, setCount] = useState(0);


useEffect (()=>{
  console.log('Componente montado o actualizado:');
  return () => {
    console.log('Limpiar al desmontar:');
}}
, [count]);


  return (
    <div className="container mx-auto p-4">'
      <h1 className=''>Renderizado condicional</h1>

      {/*Operador AND Logico (&&) */}
      <h2 className="text-lg" font-semibold mb-2 text-gray-700>1 Operador And (&&)</h2>
      <button onClick={() => setShowMessage(!showMessage)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"  >{showMessage ? 'Ocultar' : 'Mostrar'} Mensaje</button>
      {showMessage && <p>Este es un mensaje condicional</p>}

      {/*Operador Termario (? : True, False) */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">2 Operador Ternario (? : True, False)</h2>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
          {isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}
        </button>
        <p>{isLoggedIn ? 'Bienvenido, Usuario!' : 'Por favor, inicia sesión.'}</p>
      </div>

      {/*Multiples Condiciones */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">3. Multiples Condiciones</h2>
        <div>
          <button onClick={() => setUserRole('admin')}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
            Admin
          </button>

          <button onClick={() => setUserRole('user')}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
            Usuario
          </button>

          <button onClick={() => setUserRole('guest')}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
            Invitado
          </button>
        </div>

        {/* Usando if-else */}
        <div className="mt-2">
          {userRole === 'admin' && (
            <div>
              <strong>Admin Panel:</strong> Acceso completo a todas las funciones.
            </div>
          )}
        </div>

        <div className="mt-2">
          {userRole === 'user' && (
            <div>
              <strong>Panel de Usuario:</strong> Acceso limitado a las funciones.
            </div>
          )}
        </div>

        <div className="mt-2">
          {userRole === 'guest' && (
            <div>
              <strong>Modo Invitado:</strong> Acceso de solo lectura.
            </div>
          )}
        </div>


      </div>

     {/*Operador Contador Cambia de mensaje cuando se cumple la condiccion*/}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Contador de Click {count}</h2>
          {count > 5 ? <p>Muchos Clicks</p> : <p>Pocos Clisk</p>}
          <button onClick={() => setCount(count + 1)} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2">
            Incrementar
          </button>
      </div>
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

