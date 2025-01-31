import ProductsList from '../../components/ProductsList/productslist-index'
import Banner from '../../components/Banner/banner-index'
import Prato from '../../models/Prato'
import pratoPizza from '../../assets/images/pratos/prato-pizza.png'
import HeaderCart from '../../components/HeaderCart/headerCart-index'

//construtor dos jogos usados na página
const pratosDisponiveis: Prato[] = [
  {
    id: 1,
    image: pratoPizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pratoPizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pratoPizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pratoPizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pratoPizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pratoPizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

//Arquivo de estruturação da página Home do site, usando o React Router Dom.
const RestaurantPlates = () => (
  <>
    <HeaderCart />
    <Banner />
    <ProductsList pratos={pratosDisponiveis} />
  </>
)

//Exportações.
export default RestaurantPlates
