//Arquivo de configuração do CSS do rodapé da página.
import styled from 'styled-components'
import { cores } from '../../global-styles'

//Configuração CSS do container do rodapé
export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`

//Configuração CSS dos títulos.
export const SectionTitle = styled.h4`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
`

//Configuração CSS da lista de links.
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

//Configuração CSS dos Links.
export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

//Configuração CSS do copyright.
export const Copyright = styled.p`
  a {
    color: ${cores.verde};
    text-decoration: none;
    cursor: pointer;
  }
`
