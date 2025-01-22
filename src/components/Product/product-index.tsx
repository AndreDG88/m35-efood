//Arquivo de criação e configuração dos cards de produtos da página.
import { ButtonContainer } from '../Button/button-styles'
import { Card, Descricao, Titulo } from './product-styles'

//Configuração de tipagem das Propriedades.
type Props = {
  title: string
  description: string
  image: string
}

//Const principal do card.
const Product = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <ButtonContainer>Adicionar ao carrinho</ButtonContainer>
  </Card>
)

//Exportações
export default Product
