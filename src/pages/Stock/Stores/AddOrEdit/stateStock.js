import { createSlice } from '@reduxjs/toolkit'
import { initial_state_country_of_origin } from '../../CountryOfOrigin/AddOrEdit/stateCountryOfOrigin';


export const stockSlice = createSlice({
  name: 'stock',
  initialState:{
    value: {}
  },
  reducers: {
    edit_stock: (state, {payload})=>{
      state.value = {...state.value, ...payload};
    },
    update_stock: (state, {payload})=>{
      state.value = payload;
    },
    initial_state_stores: (state)=>{
      state.value = {
          "StoreId":"",
          "StoreName":"",
          "Address":"",
          "Phone":"",
          "Mobile":"",
          "SellerID":"",
          "IsStoped": false,
          "IsRealStock": false,
          "AccId":""
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const {initial_state_stores, edit_stock, update_stock } = stockSlice.actions

export default stockSlice.reducer

