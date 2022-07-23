import { calcTotalPrice } from './calcCartSum'
//получение данных корзины с localStorage
export const getCartFromLS = () => {
   const localStorageItems = localStorage.getItem('cart')
   const items = localStorageItems ? JSON.parse(localStorageItems) : []
   const totalPrice = calcTotalPrice(items)
      return {
         items,
         totalPrice
   }
}

