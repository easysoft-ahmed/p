import { createSlice } from '@reduxjs/toolkit'


export const stockSlice = createSlice({
  name: 'stock',
  initialState:{
    value: {}
  },
  reducers: {
    edit_stock: (state, {payload})=>{
        state.value = {...state.value, ...payload};
    },
    update_stock: (state, {payload})=>{
        state.value = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { edit_stock, update_stock } = stockSlice.actions

export default stockSlice.reducer

