import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const AccHelpSlice = createSlice({
  name: 'acc_help',
  initialState:{
    value: {}
  },
  reducers: {
    edit_acc_help: (state, {payload})=>{
        console.log(payload);
        
        state.value = {...state.value, ...payload};        
    },
    update_acc_help: (state, {payload})=>{
        state.value = payload;
    },
    init_acc_help: (state)=>{
        state.value = {
            AccDailyId: "", AccDailyName: ""
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_acc_help, update_acc_help,  init_acc_help } = AccHelpSlice.actions

export default AccHelpSlice.reducer

