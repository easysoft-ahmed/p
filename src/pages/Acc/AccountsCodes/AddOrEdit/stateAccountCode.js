import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const AccCodeSlice = createSlice({
  name: 'acc_code',
  initialState:{
    value: {}
  },
  reducers: {
    edit_acc_code: (state, {payload})=>{
        state.value = {...state.value, ...payload};        
    },
    update_acc_code: (state, {payload})=>{
        state.value = payload;
    },
    init_acc_code: (state)=>{
        state.value = {
            AccID: "", AccName: "", AccEngName: "", UpAccId: "",
            AccRank: "", AccNeture: "", AccType: "", AccGroup: "", AccDir: 0
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_acc_code, update_acc_code,  init_acc_code } = AccCodeSlice.actions

export default AccCodeSlice.reducer

