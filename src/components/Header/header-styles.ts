//Arquivo de configuração do CSS do Cabeçalho da página.
import styled from 'styled-components'

//configuração CSS da barra de fundo.
export const Headerbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 384px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  img {
    margin-top: 64px;
  }
`

//Configuração CSS do slogan.
export const Slogan = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  width: 539px;
  text-align: center;
`
