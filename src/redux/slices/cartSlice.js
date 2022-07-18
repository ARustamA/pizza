import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   totalPrice: 0,
   items: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers:{
      // addPizza(state, action){
         // state.items.push(action.payload)
         // state.totalPrice =  state.items.reduce((sum,obj)=>{
         //    return obj.price + sum
         // },0 )
      addPizza(state, action){
         const findItem = state.items.find(obj => obj.id ===action.payload.id)
            if (findItem){
               findItem.count++
            }else{
               state.items.push({
                  ...action.payload,
                  count: 1
               })
            }
         
            state.totalPrice =  state.items.reduce((sum,obj)=>{
            return (obj.price * obj.count) + sum
         },0 )
      },
      deletePizza(state, action){
         state.items = state.items.filter(obj => obj.id !== action.payload)
      },
      clearCart(state){
         state.items = []
      },
   }
})

export const { addPizza, deletePizza, clearCart } = cartSlice.actions

export default cartSlice.reducer