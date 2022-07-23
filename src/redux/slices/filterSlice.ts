import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum EnamSort  {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
  TITLE_DESC = "title",
  TITLE_ASC = "-title"
}

export type SortType = {
  name: string;
  sortProperty: EnamSort
}

interface FilterSliceState{
  categoriesId:  number,
  sortIndex: SortType,
  pageCount : number,
  searchValue: string
}

const initialState: FilterSliceState = {
  categoriesId:  0,
  sortIndex: { name: "популярности", sortProperty: EnamSort.RATING_DESC },
  pageCount : 1,
  searchValue: ''
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers:{
    setCategoriesId (state, action: PayloadAction<number>) {
      state.categoriesId = action.payload
    },
    setSearchValue (state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },

    setSortItems (state, action: PayloadAction<SortType>) {
      state.sortIndex = action.payload
    },
    setCurrentPage (state, action: PayloadAction<number>) {
      state.pageCount = action.payload
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
      state.pageCount = Number(action.payload.pageCount)
      state.categoriesId = Number(action.payload.categoriesId)
      state.sortIndex = action.payload.sortIndex 
    } else {
      state.pageCount = 1
      state.categoriesId = 0
      state.sortIndex = {
        name: 'популярности',
        sortProperty: EnamSort.PRICE_DESC
      }
    }
      
    },
  }
})


export const selectSort = (state: RootState) => state.filterSlice

export const pageCountSlice = (state:RootState) => state.filterSlice.pageCount

export const { setCategoriesId, setSortItems, 
  setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer  