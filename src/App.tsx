import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/header-index'
import { GlobalCss } from './global-styles'
import Rotas from './routes'
import Footer from './components/Footer/footer-index'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
