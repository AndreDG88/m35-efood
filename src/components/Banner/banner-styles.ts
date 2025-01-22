//Arquivo de configuração do CSS do banner da página.
import styled from 'styled-components'
import { cores } from '../../global-styles'

//configuração CSS da imagem de fundo.
export const Imagem = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  width: 100%;
  height: 280px;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    content: '';
  }
`

//configuração CSS dos textos.
export const Textos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 160px;
  padding: 24px 0;
  color: ${cores.branco};
  font-size: 32px;

  span {
    font-weight: 100;
    z-index: 1;
  }

  h3 {
    font-weight: 900;
    z-index: 1;
  }
`
