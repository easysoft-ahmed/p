import { createSlice } from '@reduxjs/toolkit'


export const sizeSlice = createSlice({
  name: 'size',
  initialState:{
    value: {}
  },
  reducers: {
    edit_size: (state, {payload})=>{
        state.value = {...state.value, ...payload};
    },
    update_size: (state, {payload})=>{
        state.value = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { edit_size, update_size } = sizeSlice.actions

export default sizeSlice.reducer

