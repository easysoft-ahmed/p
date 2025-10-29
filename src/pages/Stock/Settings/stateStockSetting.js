import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const StockSettingsSlice = createSlice({
  name: 'stock_setting',
  initialState:{
    value: {}
  },
  reducers: {
    edit_stock_setting: (state, {payload})=>{
        state.value = {...state.value, ...payload};        
    },
    update_stock_setting: (state, {payload})=>{
        state.value = payload;
    },
    init_stock_setting: (state)=>{
        state.value = {
            AccDailyId: "", AccDailyName: ""
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_stock_setting, update_stock_setting,  init_stock_setting } = StockSettingsSlice.actions

export default StockSettingsSlice.reducer

