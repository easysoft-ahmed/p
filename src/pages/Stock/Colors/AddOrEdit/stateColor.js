import { createSlice } from '@reduxjs/toolkit'



export const colorSlice = createSlice({
  name: 'color',
  initialState:{
    value: {}
  },
  reducers: {
    edit_color: (state, {payload})=>{
        state.value = {...state.value, ...payload};
    },
    update_color: (state, {payload})=>{
        state.value = payload;
    },
    initial_state_color: (state)=>{
      state.value = {ColorID: "", ColorName: ""}
    }
  },
})

// Action creators are generated for each case reducer function
export const { initial_state_color, edit_color, update_color } = colorSlice.actions

export default colorSlice.reducer

