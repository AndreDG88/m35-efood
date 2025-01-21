import ProductsList from '../../components/ProductsList/productslist-index'
import residentEvil from '../../assets/images/resident.png'
import fifa23 from '../../assets/images/fifa-23.png'
import diabloIv from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import streetFighter from '../../assets/images/street-figther.png'
import Zelda from '../../assets/images/zelda.png'
import Game from '../../models/Game'
import Header from '../../components/Header/header-index'

//construtor dos jogos usados na página
const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: residentEvil
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: residentEvil
  },
  {
    id: 3,
    category: 'Esportes',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'Windows',
    infos: ['50%', 'R$ 99,90'],
    image: fifa23
  },
  {
    id: 4,
    category: 'Esportes',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['50%', 'R$ 99,90'],
    image: fifa23
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diabloIv
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['05/04'],
    image: starWars
  },
  {
    id: 7,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'Windows',
    infos: ['05/04'],
    image: streetFighter
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch',
    infos: ['05/04'],
    image: Zelda
  }
]

//Arquivo de estruturação da página Home do site, usando o React Router Dom.
const Home = () => (
  <>
    <Header />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

//Exportações.
export default Home
