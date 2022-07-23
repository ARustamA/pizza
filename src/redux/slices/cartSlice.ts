import { getCartFromLS } from './../../components/getCartFromLS';
import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { calcTotalPrice } from '../../components/calcCartSum';


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

const {items, totalPrice} = getCartFromLS()

const initialState: CartSliceState = {
   totalPrice,
   items
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
         state.totalPrice =  calcTotalPrice(state.items)
      },
      
      minusPizza(state, action: PayloadAction<string>){
         const findItem = state.items.find(obj => obj.id === action.payload)
         if (findItem) {
            findItem.count--
         } 
      },
      deleteItem(state, action: PayloadAction<string>){
         state.items = state.items.filter(obj => obj.id !== action.payload)
         state.totalPrice =  calcTotalPrice(state.items)
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