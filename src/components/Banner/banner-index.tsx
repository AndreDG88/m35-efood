//Arquivo de criação e configuração do banner de destaque da página.
import { Imagem, Titulo, Precos } from './banner-styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag/tag-index'
import Button from '../Button/button-index'

//Const principal do Banner.
const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,00
        </Precos>
      </div>
      <Button type="link" to="/produto" title="Clique e aproveite a oferta!">
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

//Exportações
export default Banner
