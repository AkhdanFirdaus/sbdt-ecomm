import { useContext } from "react";
import CartContext from "./CartContext";
import useProduct from "./ProductHooks";

export default function useCart() {
  const context = useContext(CartContext)
  const { getProduct } = useProduct()

  const state = context.state.cart
  const dispatch = context.setCart

  const getCartItem = (id) => {
    return state.find(cart => cart.product_id == id)
  }

  const getCart = () => state

  const removeItem = (id) => {
    dispatch(state.filter(cart => cart.product_id != id))
  }

  const addItem = (id, qty) => {
    dispatch([
      ...state,
      { product_id: id, qty }
    ])
  }

  const changeQtyItem = (id, qty) => {
    const item = state.map(cart => {
      if (cart.product_id == id) {
        cart.qty = qty
        return cart
      }
      return cart
    })
    dispatch(item)
  }

  const getSubtotalItem = (id) => {
    return getProduct(id).price * getCartItem(id).qty
  }

  const getSubtotal = () => {
    return state.reduce((p, n) => p + (getProduct(n.product_id).price * n.qty) , 0)
  }

  const getQtyTotal = () => {
    return state.reduce((p, n) => p + n.qty, 0)
  }

  return {
    getSubtotalItem,
    getSubtotal, 
    getQtyTotal,
    getCartItem,
    getCart,
    removeItem,
    addItem,
    changeQtyItem
  }
}
