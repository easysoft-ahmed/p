import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const StoreMovementSlice = createSlice({
  name: 'store_movement',
  initialState:{
    value: {}
  },
  reducers: {
    edit_store_movement: (state, {payload})=>{
      console.log(payload);
      
      state.value = {...state.value, ...payload};
      console.log({...state.value});
    },
    update_store_movement: (state, {payload})=>{
        state.value = payload;
    },
    init_state_store_movement: (state)=>{
      state.value = {
        TransDoc : "", TransType: "", SerialId: "", DocDate: new Date(), StoreId: "", SideType: "",
        SideId: "", Notes: "", Total: "", TotalTafqit: "", BranchId: "", StockItems: []
      }
    },
    modified_tables_store_movement: (state, {payload})=>{
      let {tableName, data, actionType, fakeID, propsAndValue} = payload;
      
      console.log(payload);
      

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
        
        state.value.Total = state.value[tableName]?.reduce((totalValue, row)=>{return totalValue + row.Total}, 0) || 0
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const {modified_tables_store_movement, init_state_store_movement,  update_store_movement, edit_store_movement } = StoreMovementSlice.actions

export default StoreMovementSlice.reducer

