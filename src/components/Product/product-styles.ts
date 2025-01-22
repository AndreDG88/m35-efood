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
