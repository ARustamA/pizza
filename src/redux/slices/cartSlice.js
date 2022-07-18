import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   totalPrice: 0,
   items: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers:{
      addPizza(state, action){
         state.items.push(action.payload)
      },
      deletePizza(state, action){
         state.items.filter(obj => obj.id !== action.payload)
      },
      clearCart(state, action){
         state.items = []
      },
   }
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer