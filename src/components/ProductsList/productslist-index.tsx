//Arquivo de criação e configuração do container de armazenamento dos cards de produto.
import Product from '../Product/product-index'
import { Container, List } from './productslist-styles'
import Prato from '../../models/Prato'

//Configuração da tipagem das propriedades.
export type Props = {
  pratos: Prato[]
}

//Const principal do container de cards.
const ProductsList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <Product
            key={prato.id}
            description={prato.description}
            image={prato.image}
            title={prato.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

//Exportações
export default ProductsList
