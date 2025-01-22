//Arquivo de configuração do CSS do Cabeçalho da página.
import styled from 'styled-components'
import { cores } from '../../global-styles'

//configuração CSS da barra de fundo.
export const Headerbar = styled.header`
  height: 186px;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
//Configuração CSS do slogan.
export const Textos = styled.h2`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: 900;
  text-align: center;
`
