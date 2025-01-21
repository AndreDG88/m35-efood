// Arquivo para as configurações globais do projeto.
import { createGlobalStyle } from 'styled-components'

//Constante para as variáveis de cores.
export const cores = {
  rosa: '#e66767',
  rosaClaro: '#ffebd9',
  rosaClaroFundo: '#fff8f2',
  branco: '#fff'
}

//Configuração de breakpoints para portabilidade.
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

//Constante do css clobal.
export const GlobalCss = createGlobalStyle`

  //Config. de reset do projeto.
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;

    body {
      background-color: ${cores.rosaClaroFundo};
      color: ${cores.rosa};
    }
  }

  //Configuração do container principal do projeto.
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
