import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoriesId:  0,
  sortIndex: { name: "популярности", sortProperty: 'rating' },

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
    }

  }
})




export const { setCategoriesId, setSortItems } = filterSlice.actions

export default filterSlice.reducer