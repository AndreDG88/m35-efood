//Configuração da área de compra do carrinho
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store-index'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Product/product-index'
import Button from '../Button/button-index'
import {
  CartContainer,
  Overlay,
  Sidebar,
  CartItem,
  Prices
} from './cart-styles'

//Função principal do carrinho
const Cart = () => {
  //Estado para controlar se o carrinho está aberto ou fechado.
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  //função de soma dos valores
  const getTotalPrice = () => {
    return items.reduce((acumulador, currentItem) => {
      if (currentItem.preco) {
        return acumulador + currentItem.preco
      }
      return acumulador
    }, 0)
  }

  //função de remoção de um item do carrinho.
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      {/* overlay */}
      <Overlay onClick={closeCart} />
      {/* barra lateral*/}
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Prices>
              Valor Total <span>{formataPreco(getTotalPrice())} </span>
            </Prices>
            <Button
              type="button"
              title="Clique aqui para continuar com a compra"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

//Exportações
export default Cart
