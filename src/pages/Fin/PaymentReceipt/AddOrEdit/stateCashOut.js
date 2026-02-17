import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const CashOutSlice = createSlice({
  name: 'cash_out',
  initialState:{
    value: {}
  },
  reducers: {
    edit_cash_out: (state, {payload})=>{      
        state.value = {...state.value, ...payload};        
    },
    update_cash_out: (state, {payload})=>{
        state.value = payload;
    },
    init_cash_out: (state)=>{
      state.value = {
        DocNo: "", BranchId: 1, SerialId: "", DocDate: dayjs().format("YYYY/MM/DD"), Notes: "", FinCashDets: []
      }
    },
    modified_tables_cash_out: (state, {payload})=>{
      let {tableName, data, actionType, fakeID, propsAndValue} = payload;

      if(actionType === "add"){
        state.value[tableName] = [...state.value[tableName] || [] , data]        
      }else if(actionType === "remove"){
        state.value[tableName] = state.value[tableName].filter(row => row.fakeID !== fakeID)
      }else if(actionType === "edit"){
        state.value[tableName] = state.value[tableName].map(row => {
          if(row.fakeID === fakeID){
              return {...row, ...propsAndValue}
          }else{
              return {...row}
          }
          })
          
      }
      if(tableName === "FinCashDets"){
        state.value.FinCashDets = state.value?.FinCashDets?.map(ele => {
          return {...ele, Total: ele.Qty * ele.Price}
        })
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const {edit_cash_out, update_cash_out,  init_cash_out, modified_tables_cash_out } = CashOutSlice.actions

export default CashOutSlice.reducer

