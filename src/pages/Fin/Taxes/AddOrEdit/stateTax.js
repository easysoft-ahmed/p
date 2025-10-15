import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const TaxSlice = createSlice({
  name: 'tax',
  initialState:{
    value: {}
  },
  reducers: {
    edit_tax: (state, {payload})=>{      
        state.value = {...state.value, ...payload};        
    },
    update_tax: (state, {payload})=>{
        state.value = payload;
    },
    init_tax: (state)=>{
        state.value = {
            TaxId: "", TaxName: "", TaxRate: ""
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_tax, update_tax,  init_tax } = TaxSlice.actions

export default TaxSlice.reducer

