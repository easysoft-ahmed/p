import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const PurchSettingSlice = createSlice({
  name: 'purch_setting',
  initialState:{
    value: {}
  },
  reducers: {
    edit_purch_setting: (state, {payload})=>{
        state.value = {...state.value, ...payload};        
    },
    update_purch_setting: (state, {payload})=>{
        state.value = payload;
    },
    init_purch_setting: (state)=>{
        state.value = {
            AccDailyId: "", AccDailyName: ""
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_purch_setting, update_purch_setting,  init_purch_setting } = PurchSettingSlice.actions

export default PurchSettingSlice.reducer

