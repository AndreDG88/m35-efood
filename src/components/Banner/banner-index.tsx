//Arquivo de criação e configuração do banner de destaque da página.
import { Imagem, Textos } from './banner-styles'
import banner from '../../assets/images/banner.png'

//Const principal do Banner.
const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <Textos className="container">
      <span>Italiana</span>
      <h3>La Dolce Vita Trattoria</h3>
    </Textos>
  </Imagem>
)

//Exportações
export default Banner
