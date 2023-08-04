import './App.css'

import UserDetails from './components/UserDetails'

function App() {

	const data = [
		{id:1, nome: 'Mateus', idade: 22, profissao: 'Programador'},
		{id:2, nome: 'Igor', idade: 21, profissao: 'Uber'},
		{id:3, nome: 'Arthur', idade: 20, profissao: 'Motoboy'},
		{id:4, nome: 'Daniel', idade: 12, profissao: 'Estudante'}
	]

  return (
    <>
		<h1>Desafio</h1>
		{data.map((user) => (
			<UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}/>
		))}
    </>
  )
}

export default App
