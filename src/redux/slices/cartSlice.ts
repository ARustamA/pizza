import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
   id:string 
   imageUrl:string  
   title:string 
   price:number 
   sizes:string
   types:string
   count:number
}

interface CartSliceState {
   totalPrice: number;
   items: CartItem[]
}


const initialState: CartSliceState = {
   totalPrice: 0,
   items: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addPizza(state, action: PayloadAction<CartItem>){
         const findItem = state.items.find((obj) => obj.id === action.payload.id)
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
      
      minusPizza(state, action: PayloadAction<string>){
         const findItem = state.items.find(obj => obj.id === action.payload)
         if (findItem) {
            findItem.count--
         } 
      },
      deleteItem(state, action: PayloadAction<string>){
         state.items = state.items.filter(obj => obj.id !== action.payload)
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

export const selectCart = (state:RootState) => state.cartSlice

export const selectCartItemById = (id:string) => (state:RootState) => 
state.cartSlice.items.find(obj => obj.id === id)

export const { addPizza, deleteItem, clearItem, minusPizza } = cartSlice.actions

export default cartSlice.reducer