import { createSlice } from '@reduxjs/toolkit'


export const unitSlice = createSlice({
  name: 'unit',
  initialState:{
    value: {}
  },
  reducers: {
    edit_unit: (state, {payload})=>{
        state.value = {...state.value, ...payload};
    },
    update_unit: (state, {payload})=>{
        state.value = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { edit_unit, update_unit } = unitSlice.actions

export default unitSlice.reducer

