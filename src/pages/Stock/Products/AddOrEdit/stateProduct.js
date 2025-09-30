import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name: 'product',
  initialState:{
    value: {}
  },
  reducers: {
    edit_product: (state, {payload})=>{
        state.value = {...state.value, ...payload};
    },
    update_product: (state, {payload})=>{
        state.value = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { edit_product, update_product } = productSlice.actions

export default productSlice.reducer

