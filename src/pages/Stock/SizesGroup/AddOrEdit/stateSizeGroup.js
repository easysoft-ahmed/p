import { createSlice } from '@reduxjs/toolkit'


export const sizeGroupSlice = createSlice({
  name: 'size_group',
  initialState:{
    value: {}
  },
  reducers: {
    edit_size_group: (state, {payload})=>{
        state.value = {...state.value, ...payload};
    },
    update_size_group: (state, {payload})=>{
        state.value = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { edit_size_group, update_size_group } = sizeGroupSlice.actions

export default sizeGroupSlice.reducer

