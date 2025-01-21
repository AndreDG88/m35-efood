//Arquivo de configuração do CSS dos cards de produto.
import styled from 'styled-components'
import { cores } from '../../global-styles'
import { TagContainer } from '../Tag/tag-styles'

//Configuração CSS do container do card.
export const Card = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

//Configuração CSS do titulo do card.
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

//Configuração CSS do descritivo do card.
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

//Configuração CSS de posicionamento da tag infos.
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
