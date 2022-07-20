import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   totalPrice: 0,
   items: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addPizza(state, action){
         const findItem = state.items.find(obj => obj.id === action.payload.id)
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
      
      minusPizza(state, action){
         const findItem = state.items.find(obj => obj.id === action.payload.id)
         if (findItem) {
            findItem.count--
         } 
      },
      deleteItem(state, action){
         state.items = state.items.filter(obj => obj.id !== action.payload.id)
         state.totalPrice =  state.items.reduce((sum,obj)=>{
            return (obj.price * obj.count) + sum
         },0)
      },
      clearItem(state){
         state.items = []
         state.totalPrice = 0
      },
   }
})

export const selectCart = (state) => state.cartSlice

export const selectCartItemById = (id) => (state) => 
state.cartSlice.items.find(obj => obj.id === id)

export const { addPizza, deleteItem, clearItem, minusPizza } = cartSlice.actions

export default cartSlice.reducer