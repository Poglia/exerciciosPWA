import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './componentes/Menu'
import Home from './componentes/telas/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Exercicio from './componentes/telas/exercicio/Exercicio'

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Routes>
          <Route exact="true" path='/' element={<Home/>}/>
          <Route exact="true" path='/exercicios' element={<Exercicio/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
