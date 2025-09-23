import { useState } from 'react';
import useFetch from './useFetch';
import './App.css';

export default function App() {
  const [query, setQuery] = useState("");
  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users" 
  );

  const filtered = users?.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));


return (
  <div className="container">
    <h1>👥 Usuarios de la Api</h1>
    <input 
      type="text" 
      placeholder="Buscar usuario..." 
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
    {loading && <p>Cargando Datos...</p>}
    {error && <p>Error Cargando datos</p>}
    <ul>
      {filtered?.map(user => (
        <li key={user.id}>
          {user.name} - {user.username} - <em>{user.email}</em>
        </li>
      ))}
    </ul>
    </div>
);


}