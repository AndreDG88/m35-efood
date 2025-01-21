//Configuração de modelo matriz para as propriedades que compõem um jogo no site.
class Game {
  id: number
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game
