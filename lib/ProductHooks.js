import { useState } from "react";
import { products } from "../helpers/dummy";

export default function useProduct() {
  const [state, dispatch] = useState(products)

  const getProducts = () => state
  const getProduct = (id) => state.find(product => product.id == id)

  const handleProduct = () => {
    console.log('Product Clicked')
  }

  return {
    getProducts,
    getProduct,
    handleProduct
  }
}
