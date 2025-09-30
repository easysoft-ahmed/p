import { createSlice } from '@reduxjs/toolkit'


export const CountryOfOriginSlice = createSlice({
  name: 'country_of_origin',
  initialState:{
    value: {}
  },
  reducers: {
    edit_country_of_origin: (state, {payload})=>{
        state.value = {...state.value, ...payload};
    },
    update_country_of_origin: (state, {payload})=>{
        state.value = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { edit_country_of_origin, update_country_of_origin } = CountryOfOriginSlice.actions

export default CountryOfOriginSlice.reducer

