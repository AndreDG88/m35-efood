//Arquivo de criação e configuração do rodapé da página.
import {
  Container,
  Copyright,
  FooterSection,
  Link,
  Links,
  SectionTitle
} from './footer-styles'

//Const para controle de atualização do ano.
const currentYear = new Date().getFullYear()

//Const principal do rodapé.
const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <Copyright>
        {currentYear} - &copy; E-PLAY Todos os direitos reservados, página
        criada para fins de estudo. Criado por{' '}
        <a href="https://www.linkedin.com/in/andre-soares88/">André Soares</a>,
        veja mais projetos no meu{' '}
        <a href="https://github.com/AndreDG88">Github</a>.
      </Copyright>
    </div>
  </Container>
)

//Exportações.
export default Footer
