//Configuração de modelo matriz para as propriedades que compõem um restaurante no site.
class Restaurante {
  nota: number
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  destacado: boolean
  titulo: string
  tipo: string

  constructor(
    id: number,
    nota: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    destacado: boolean,
    titulo: string,
    tipo: string
  ) {
    this.id = id
    this.nota = nota
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.destacado = destacado
    this.titulo = titulo
    this.tipo = tipo
  }
}

export default Restaurante
