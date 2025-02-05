import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList/productslist-index'
import Banner from '../../components/Banner/banner-index'
import HeaderCart from '../../components/HeaderCart/headerCart-index'
import { Cardapio } from '../Home/home-index'
import { useParams } from 'react-router-dom'

//Arquivo de estruturação da página Home do site, usando o React Router Dom.
const RestaurantPlates = () => {
  const { id } = useParams()
  const [pratosDisponiveis, setPratosDisponiveis] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPratosDisponiveis(res.cardapio))
  }, [id])

  return (
    <>
      <HeaderCart />
      <Banner />
      <ProductsList pratos={pratosDisponiveis} />
    </>
  )
}

//Exportações.
export default RestaurantPlates
