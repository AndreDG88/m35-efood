import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home-index'
import RestaurantPlates from './pages/Restaurant/restaurant-index'

//Configuração das rotas de navegação com Router-dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantPlates />} />
  </Routes>
)

export default Rotas
