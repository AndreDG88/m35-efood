//Arquivo de configuração do CSS do banner da página.
import styled from 'styled-components'
import { TagContainer } from '../Tag/tag-styles'

//configuração CSS da imagem de fundo.
export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    padding-top: 340px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

//configuração CSS do texto de titulo.
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

//configuração CSS do texto de valores.
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
