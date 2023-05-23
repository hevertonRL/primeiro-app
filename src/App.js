import Nome from './components/Nome';
import { useState } from 'react';

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador');

  function handleChangeName(nome) {
    setAluno(nome);
  }

  return (
    <div>
      <h1>Component App</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName('Heverton') }>Mudar o Nome</button>
    </div>
  );
}

export default App;
