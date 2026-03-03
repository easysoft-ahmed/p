import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const CustomerTypeSlice = createSlice({
  name: 'customer_type',
  initialState:{
    value: {}
  },
  reducers: {
    edit_customer_type: (state, {payload})=>{      
        state.value = {...state.value, ...payload};        
    },
    update_customer_type: (state, {payload})=>{
        state.value = payload;
    },
    init_customer_type: (state)=>{
      state.value = { CustTypeID: "", CustTypeName: "", UpCustTypeID: "0", UpCustTypeName: "" }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_customer_type, update_customer_type,  init_customer_type } = CustomerTypeSlice.actions

export default CustomerTypeSlice.reducer

