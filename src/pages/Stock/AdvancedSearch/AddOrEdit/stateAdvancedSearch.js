import { createSlice } from '@reduxjs/toolkit'



export const advancedSearchSlice = createSlice({
  name: 'advanced_search',
  initialState:{
    value: {}
  },
  reducers: {
    edit_advanced_search: (state, {payload})=>{
      state.value = {...state.value, ...payload};
    },
    update_advanced_search: (state, {payload})=>{
        state.value = payload;
    },
    initial_state_advanced_search: (state)=>{
      state.value = {}
    }
  },
})

// Action creators are generated for each case reducer function
export const { initial_state_advanced_search, edit_advanced_search, update_advanced_search } = advancedSearchSlice.actions

export default advancedSearchSlice.reducer

