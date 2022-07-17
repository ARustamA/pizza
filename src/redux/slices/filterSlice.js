import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoriesId:  0,
  sortIndex: { name: "популярности", sortProperty: 'rating' },
  pageCount : 1,

}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers:{
    setCategoriesId (state, action) {
      state.categoriesId = action.payload
    },
    setSortItems (state, action) {
      state.sortIndex = action.payload
    },
    setCurrentPage (state, action) {
      state.pageCount = action.payload
    }
  }
})




export const { setCategoriesId, setSortItems, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer