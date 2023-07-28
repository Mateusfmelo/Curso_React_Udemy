import { useState } from 'react'
import './App.css'

import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {

	const name = 'Joaquim'
	const [userName] = useState('Maria')

	const cars = [
		{id:1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0},
		{id:2, brand: 'Kia', color: 'Branco', newCar: false, km: 3400},
		{id:3, brand: 'Renault', color: 'Azul', newCar: false, km: 234}
	]

	return (
		<>
			<div>
				<h3>Avançando em React!</h3>
			</div>
			{/* Imagem de public*/}
			<div>
				<img src="../public/img1.jpg" width='100%' alt="Paisagem" />
			</div>

			{/* Imagem em assets*/}
			<div>
				<img src="src/assets/city.jpg" width= '100%' alt="Cidade" />
			</div>

			<ManageData/>
			<ListRender/>
			<ConditionalRender/>

			{/* props */}
			<ShowUserName name={userName}/>

			{/* destructuring */}
			<CarDetails brand='VW' km={1000} color='Azul' newCar={false}/>
			
			{/* reaproveitamento */}
			<CarDetails brand='Ford' color='Vermelho' km={0} newCar={true}/>
			<CarDetails brand='Fiat' color='Branco' km={4500} newCar={false}/>

			{/* loop em array de objetos*/}
			{cars.map((car) => (
				<CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
			))}
		</>
	)
}

export default App
