import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizza = createAsyncThunk( "pizza/fetchPizzasById",
   async (params, thunkAPI) => {
      const { order, sorty, category, search, pageCount} = params
      const { data } = await axios.get(`https://62cbce7d8042b16aa7c2c215.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sorty}&order=${order}${search}`)
      return data
   }
)

const initialState = {
   items: [],
   status: 'loading',

}
const pizzaSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      setItems(state, action){
         state.items = action.payload
      },
   },
   extraReducers:{
      [fetchPizza.pending]:(state)=>{
         state.status = 'loading'
         state.items = []  },
      [fetchPizza.fulfilled]:(state, action)=>{
         state.items = action.payload
         state.status = 'success'
      },
      [fetchPizza.rejected]:(state, action)=>{
         state.status = 'error'
      state.items = [] }
   }
})
   export const { setItems } = pizzaSlice.actions
   export default pizzaSlice.reducer