import Header from '../../components/Header/header-index'
import RestaurantsList from '../../components/RestaurantsList/restaurantList-index'
import Restaurante from '../../models/Restaurante'
import pratoSushi from '../../assets/images/pratos/prato-sushi.png'
import pratoMacarrao from '../../assets/images/pratos/prato-macarrao.png'

//construtor dos jogos usados na página
const restaurantesLista: Restaurante[] = [
  {
    id: 1,
    destacado: true,
    tipo: 'Japonesa',
    infos: ['Japonesa'],
    image: pratoSushi,
    title: 'Hioki Sushi',
    titulo: 'Hioki Sushi',
    nota: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    destacado: false,
    tipo: 'Italiana',
    infos: ['Italiana'],
    image: pratoMacarrao,
    title: 'La Dolce Vita Trattoria',
    titulo: 'La Dolce Vita Trattoria',
    nota: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    destacado: false,
    tipo: 'Italiana',
    infos: ['Italiana'],
    image: pratoMacarrao,
    title: 'La Dolce Vita Trattoria',
    titulo: 'La Dolce Vita Trattoria',
    nota: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    destacado: false,
    tipo: 'Italiana',
    infos: ['Italiana'],
    image: pratoMacarrao,
    title: 'La Dolce Vita Trattoria',
    titulo: 'La Dolce Vita Trattoria',
    nota: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    destacado: false,
    tipo: 'Italiana',
    infos: ['Italiana'],
    image: pratoMacarrao,
    title: 'La Dolce Vita Trattoria',
    titulo: 'La Dolce Vita Trattoria',
    nota: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    destacado: false,
    tipo: 'Italiana',
    infos: ['Italiana'],
    image: pratoMacarrao,
    title: 'La Dolce Vita Trattoria',
    titulo: 'La Dolce Vita Trattoria',
    nota: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

//Arquivo de estruturação da página Home do site, usando o React Router Dom.
const Home = () => (
  <>
    <Header />
    <RestaurantsList restaurantes={restaurantesLista} />
  </>
)

//Exportações.
export default Home
