import './App.css'
import ListRender from './components/ListRender'

import ManageData from './components/ManageData'

function App() {

  return (
    <>
      <div>
        <h3>Avançando em React!</h3>
      </div>
      {/* Imagem de public*/}
      <div>
        <img src="../public/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em assets*/}
      <div>
        <img src="src/assets/city.jpg" alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
    </>
  )
}

export default App
