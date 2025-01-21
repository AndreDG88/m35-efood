//Configuração de modelo matriz para as propriedades que compõem um prato no site.
class Prato {
  description: string
  image: string
  title: string
  id: number

  constructor(id: number, description: string, image: string, title: string) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
  }
}

export default Prato
