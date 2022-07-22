import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoriesId:  0,
  sortIndex: { name: "популярности", sortProperty: 'rating' },
  pageCount : 1,
  searchValue: ''

}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers:{
    setCategoriesId (state, action) {
      state.categoriesId = action.payload
    },
    setSearchValue (state, action) {
      state.searchValue = action.payload
    },

    setSortItems (state, action) {
      state.sortIndex = action.payload
    },
    setCurrentPage (state, action) {
      state.pageCount = action.payload
    },
    setFilters(state, action) {
      state.pageCount = Number(action.payload.pageCount)
      state.categoriesId = Number(action.payload.categoriesId)
      state.sortIndex = action.payload.sortIndex
      
    },
  }
})


export const selectSort = (state) => state.filterSlice

export const pageCountSlice = (state) => state.filterSlice.pageCount

export const { setCategoriesId, setSortItems, 
  setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer