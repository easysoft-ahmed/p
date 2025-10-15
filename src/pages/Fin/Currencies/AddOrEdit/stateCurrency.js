import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const CurrencySlice = createSlice({
  name: 'currency',
  initialState:{
    value: {}
  },
  reducers: {
    edit_currency: (state, {payload})=>{      
        state.value = {...state.value, ...payload};        
    },
    update_currency: (state, {payload})=>{
        state.value = payload;
    },
    init_currency: (state)=>{
        state.value = {
            CurrId: "", CurrName: "", CurrPart: "", CurrRate: "", IsDefualte: false
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_currency, update_currency,  init_currency } = CurrencySlice.actions

export default CurrencySlice.reducer

