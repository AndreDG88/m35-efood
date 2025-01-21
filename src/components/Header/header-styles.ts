//Arquivo de configuração do CSS do Cabeçalho da página.
import styled from 'styled-components'
import background from '../../assets/images/background.png'
import { breakpoints } from '../../global-styles'

//configuração CSS do container
export const ContainerDoCabecalho = styled.div`
  background-image: url(${background});
  padding: 40px;
  text-align: center;
  margin-bottom: 80px;
`
//configuração CSS do slogan
export const Slogan = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  width: 540px;
  margin: 136px auto 0;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 80px;
    font-size: 24px;
    max-width: 100%;
  }
`
