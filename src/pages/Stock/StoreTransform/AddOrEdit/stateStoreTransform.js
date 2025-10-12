import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const StoreTransformSlice = createSlice({
  name: 'store_transform',
  initialState:{
    value: {}
  },
  reducers: {
    edit_store_transform: (state, {payload})=>{      
        state.value = {...state.value, ...payload};
        state.value.Total = state.value["TransFormItems"]?.reduce((totalValue, row)=>{return totalValue + Number(row.Qty)}, 0) || 0

    },
    update_store_transform: (state, {payload})=>{
        state.value = payload;
    },
    init_state_store_transform: (state)=>{
      state.value = {TransDoc: "", DocNo: "", SerialId: "", DocDate: new Date(), Notes: "", BranchId: 1, TransFormItems: []}
    },
    modified_tables_store_transform: (state, {payload})=>{
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
        
        state.value.Total = state.value[tableName]?.reduce((totalValue, row)=>{return totalValue + Number(row.Qty)}, 0) || 0
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const {edit_store_transform, update_store_transform,  init_state_store_transform, modified_tables_store_transform } = StoreTransformSlice.actions

export default StoreTransformSlice.reducer

