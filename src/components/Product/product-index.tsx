//Arquivo de criação e configuração dos cards de produtos da página.
import { useState } from 'react'
import { ButtonContainer } from '../Button/button-styles'
import {
  Card,
  CartButton,
  Close,
  Descricao,
  FDescription,
  FoodPhoto,
  FTitle,
  Modal,
  ModalContainer,
  ModalContent,
  Titulo
} from './product-styles'
import closeIcon from '../../assets/images/icones/fechar -icon.png'

//Configuração de tipagem das Propriedades.
type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

//Const principal do card.
const Product = ({ id, nome, descricao, foto, porcao, preco }: Props) => {
  const [modalAberto, SetModalAberto] = useState(false)

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <Titulo>{nome}</Titulo>
        <Descricao>{descricao}</Descricao>
        <ButtonContainer onClick={() => SetModalAberto(true)}>
          Adicionar ao carrinho
        </ButtonContainer>
      </Card>
      {/* MODAL */}
      <Modal className={modalAberto ? 'visivel' : ' '}>
        <ModalContent>
          <FoodPhoto src={foto} alt={nome} />
          <ModalContainer>
            <FTitle>{nome}</FTitle>
            <FDescription>
              {descricao}
              <p>Serve: {porcao}</p>
            </FDescription>
            <CartButton>
              Adicionar ao carrinho - ${formataPreco(preco)}
            </CartButton>
          </ModalContainer>
          <Close
            onClick={() => SetModalAberto(false)}
            src={closeIcon}
            alt="fechar"
          />
        </ModalContent>
        <div onClick={() => SetModalAberto(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

//Exportações
export default Product
