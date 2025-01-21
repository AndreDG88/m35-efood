//Arquivo de criação e configuração do container de armazenamento dos cards de produto.
import Product from '../Product/product-index'
import { Container, List } from './productslist-styles'
import Game from '../../models/Game'

//Configuração da tipagem das propriedades.
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

//Const principal do container de cards.
const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

//Exportações
export default ProductsList
