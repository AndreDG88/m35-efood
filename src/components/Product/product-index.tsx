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
  title: string
  description: string
  image: string
}

//Const principal do card.
const Product = ({ title, description, image }: Props) => {
  const [modalAberto, SetModalAberto] = useState(false)

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <ButtonContainer onClick={() => SetModalAberto(true)}>
          Adicionar ao carrinho
        </ButtonContainer>
      </Card>
      {/* MODAL */}
      <Modal className={modalAberto ? 'visivel' : ' '}>
        <ModalContent>
          <FoodPhoto src={image} alt={title} />
          <ModalContainer>
            <FTitle>{title}</FTitle>
            <FDescription>
              {description}
              <p>Serve: de 2 a 3 pessoas</p>
            </FDescription>
            <CartButton>Adicionar ao carrinho - R$ 60.90</CartButton>
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
