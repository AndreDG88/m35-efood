//Arquivo de criação e configuração das tags da página.
import { TagContainer } from './tag-styles'

//Configuração de tipagem das Propriedades.
export type Props = {
  size?: 'small' | 'big'
  children: string
}

//Const principal da tag.
const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

//Exportações
export default Tag
