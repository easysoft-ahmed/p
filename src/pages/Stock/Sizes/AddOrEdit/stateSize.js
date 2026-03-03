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
    initial_state_size: (state)=>{
      state.value = {MeagureID: "", MeagureName: ""};
    }
  },
})

// Action creators are generated for each case reducer function
export const { initial_state_size, edit_size, update_size } = sizeSlice.actions

export default sizeSlice.reducer

