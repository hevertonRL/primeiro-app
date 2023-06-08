import { useState } from 'react';

function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [user, setUser] = useState({});

  function handleRegister(e){
    e.preventDefault();
    alert("Usuario cadastrado com sucesso!");
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return (
    <div>
      <h1>Cadastrando Usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <br/>
        <input
          type='text'
          placeholder='Digite seu Nome' 
          value={nome} 
          onChange={(e)=> setNome(e.target.value)}
        />
        <br/>

        <label>Email:</label>
        <br/>
        <input 
          type='text'
          placeholder='Digite seu Email' 
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}
          />
        <br/>

        <label>Idade:</label>
        <br/>

        <input
          type='text'
          placeholder='Digite sua Idade' 
          value={idade} 
          onChange={(e)=> setIdade(e.target.value)}
          />
        <br/> 
       

        <button type='submit'>Registrar</button>

        <br/><br/>

        <div>
          <span>Bem vindo: {user.nome}</span><br/>
          <span>Idade: {user.idade}</span><br/>
          <span>Email: {user.email}</span><br/>
          
        </div>

      </form>
    </div>
  );
}

export default App;
