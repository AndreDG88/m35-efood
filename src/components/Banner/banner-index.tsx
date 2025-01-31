//Arquivo de criação e configuração do banner de destaque da página.
import { useEffect, useState } from 'react'
import { Imagem, Textos } from './banner-styles'
import { Restaurante } from '../../pages/Home/home-index'

//Const principal do Banner.
const Banner = () => {
  const [restaurant, setRestaurant] = useState<Restaurante>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

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
