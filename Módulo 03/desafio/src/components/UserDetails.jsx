const UserDetails = ({nome, idade, profissao}) => {

  return (
    <>
		<h2>{nome}</h2>
		<p>Idade: {idade}</p>
		<p>Profissão: {profissao}</p>
		{ idade >= 18 ? (
		<p>Pode tirar habilitação!</p>
		) : (
		<p>Menor de idade!</p>
		)}
    </>
  )
}

export default UserDetails