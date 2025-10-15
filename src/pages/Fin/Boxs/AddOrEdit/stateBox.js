import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const BoxSlice = createSlice({
  name: 'box',
  initialState:{
    value: {}
  },
  reducers: {
    edit_box: (state, {payload})=>{      
        state.value = {...state.value, ...payload};        
    },
    update_box: (state, {payload})=>{
        state.value = payload;
    },
    init_box: (state)=>{
        state.value = {
            BoxId: "", BoxName: "", CurrID: "", CurrRate: "", AccId: "",
            FirstBalDate: new Date().toString(), FirstBal: 0.0, IsCredit: false, IsDebit: true
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_box, update_box,  init_box } = BoxSlice.actions

export default BoxSlice.reducer

