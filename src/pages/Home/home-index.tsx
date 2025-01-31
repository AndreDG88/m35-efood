import { useEffect, useState } from 'react'
import Header from '../../components/Header/header-index'
import RestaurantsList from '../../components/RestaurantsList/restaurantList-index'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

//Arquivo de estruturação da página Home do site, usando o React Router Dom.
const Home = () => {
  const [lojas, setLojas] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setLojas(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantsList restaurantes={lojas} />
    </>
  )
}

//Exportações.
export default Home
