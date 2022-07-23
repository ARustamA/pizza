import { RootState } from './../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type PizzaItem = {
   id: string;
   imageUrl: string;
   title: string;
   sizes: string[];
   price: number;
   types: number[];
   count: number;
}

export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error',
}

interface PizzaSliceState {
   items: PizzaItem[];
   status: Status
}

type FetchPizzasArgs = {
   order: string; 
   sorty: string; 
   category: string;
   search: string; 
   pageCount: number;}

// type FetchPizzasArgs = Record<string, string>
export const fetchPizza = createAsyncThunk("pizza/fetchPizzasById",
   async (params: FetchPizzasArgs) => {
      const { order, sorty, category, search, pageCount } = params
      const { data } = await axios.get<PizzaItem[]>(`https://62cbce7d8042b16aa7c2c215.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sorty}&order=${order}${search}`)
      return data as PizzaItem[]
   }
)

const initialState: PizzaSliceState = {
   items: [],
   status: Status.LOADING,
}
const pizzaSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      setItems(state, action: PayloadAction<PizzaItem[]>) {
         state.items = action.payload
      },
   },
   extraReducers: (builder) => {
      builder.addCase(
         fetchPizza.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
         },
      )
      builder.addCase(
         fetchPizza.fulfilled, (state, action: PayloadAction<PizzaItem[]>) => {
            state.items = action.payload
            state.status = Status.SUCCESS
         },
      )
      builder.addCase(
         fetchPizza.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
         }
      )
   }
})

export const pizzaState = (state: RootState) => state.pizzaSlice
export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer