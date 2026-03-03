import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const SupplierTypeSlice = createSlice({
  name: 'supplier_type',
  initialState:{
    value: {}
  },
  reducers: {
    edit_supplier_type: (state, {payload})=>{      
        state.value = {...state.value, ...payload};        
    },
    update_supplier_type: (state, {payload})=>{
        state.value = payload;
    },
    init_supplier_type: (state)=>{
      state.value = { VendorTypeID: "", VendorTypeName: "", UpVendorTypeID: "0", UpVendorTypeName: "" }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_supplier_type, update_supplier_type,  init_supplier_type } = SupplierTypeSlice.actions

export default SupplierTypeSlice.reducer

