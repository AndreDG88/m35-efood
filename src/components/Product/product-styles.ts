//Arquivo de configuração do CSS dos cards de produto.
import styled from 'styled-components'
import { cores } from '../../global-styles'
import { ButtonContainer } from '../Button/button-styles'

//Configuração CSS do container do card.
export const Card = styled.div`
  border: 1px solid ${cores.rosa};
  position: relative;
  margin-top: 80px;
  background-color: ${cores.rosa};
  color: ${cores.bege};
  padding: 8px;
  position: relative;

  > img {
    width: 100%;
    max-height: 167px;
    object-fit: cover;
  }
  ${ButtonContainer} {
    width: 100%;
    background-color: ${cores.bege};
    cursor: pointer;
  }
`

//Configuração CSS do titulo do card.
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

//Configuração CSS do descritivo do card.
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  height: 88px;
  margin-bottom: 8px;
`

//Configuração do Modal.
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  background-color: ${cores.rosa};
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 1;
`
export const FoodPhoto = styled.img`
  object-fit: cover;
  width: 280px;
  height: 280px;
  margin: 32px 24px 32px 32px;
  object-fit: cover;
`
export const ModalContainer = styled.div`
  max-width: 656px;
  width: 100%;
  margin-top: 32px;
`
export const FTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branco};
  line-height: 21.09px;
  display: block;
`
export const FDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.branco};
  line-height: 22px;
  width: 100%;
  margin: 16px 0 16px 0;
  p {
    margin-top: 16px;
  }
`
export const Close = styled.img`
  max-width: 16px;
  max-height: 16px;
  width: 100%;
  margin: 8px;
  cursor: pointer;
`

export const CartButton = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosa};
  border: none;
  padding: 4px 7px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`
