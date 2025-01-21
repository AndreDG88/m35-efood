//Arquivo de criação e configuração do cabeçalho da página.
import efoodLogo from '../../assets/images/efood-logo.png'
import { ContainerDoCabecalho, Slogan } from './header-styles'

//Const principal do Cabeçalho.
const Header = () => {
  return (
    <ContainerDoCabecalho>
      <div className="container">
        <img src={efoodLogo} alt="Efood" />
        <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
      </div>
    </ContainerDoCabecalho>
  )
}

//Exportações
export default Header
