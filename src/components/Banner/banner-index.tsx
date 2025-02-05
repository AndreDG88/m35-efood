//Arquivo de criação e configuração do banner de destaque da página.
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Imagem, Textos } from './banner-styles'
import { Restaurante } from '../../pages/Home/home-index'

//Const principal do Banner.
const Banner = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  return (
    <Imagem style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <Textos className="container">
        <span>{restaurant?.tipo}</span>
        <h3>{restaurant?.titulo}</h3>
      </Textos>
    </Imagem>
  )
}

//Exportações
export default Banner
