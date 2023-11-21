import {} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer'
import Home from '../src/Home';
import Projeto from '../src/Projeto';
import Contato from '../src/Contato';
import Duvidas from '../src/Duvidas';
import CadastroLogin from '../src/CadastroLogin'



function App() {

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Projeto' element={<Projeto />} />
          <Route path='/Duvidas' element={<Duvidas />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/CadastroLogin' element={<CadastroLogin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
