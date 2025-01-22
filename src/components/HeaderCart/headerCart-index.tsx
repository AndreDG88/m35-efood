//Arquivo de criação e configuração do cabeçalho da página.
import { Link } from 'react-router-dom'
import { Headerbar, Textos } from './headerCart.styles'
import effodLogo from '../../assets/images/efood-logo.png'
import background from '../../assets/images/background.png'

//Const principal do Cabeçalho.
const HeaderCart = () => (
  <Headerbar style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      {/* Restaurantes */}
      <Textos>Restaurantes</Textos>

      {/* logo */}
      <Link to="/">
        <img src={effodLogo} alt="Efood" />
      </Link>

      {/* Carrinho */}
      <Textos>0 produto(s) no carrinho</Textos>
    </div>
  </Headerbar>
)

//Exportações
export default HeaderCart
