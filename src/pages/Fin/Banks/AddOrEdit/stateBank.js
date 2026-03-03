import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const BankSlice = createSlice({
  name: 'bank',
  initialState:{
    value: {}
  },
  reducers: {
    edit_bank: (state, {payload})=>{      
        state.value = {...state.value, ...payload};        
    },
    update_bank: (state, {payload})=>{
        state.value = payload;
    },
    init_bank: (state)=>{
        state.value = {
            BankId: "", BankName: "", CurrID: "", CurrRate: "", AccId: "",
            FirstBalDate: new Date().toString(), FirstBal: 0.0, IsCredit: false, IsDebit: true
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_bank, update_bank,  init_bank } = BankSlice.actions

export default BankSlice.reducer

