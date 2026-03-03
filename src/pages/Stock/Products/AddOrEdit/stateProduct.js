import { createSlice } from '@reduxjs/toolkit'

let unique  = () => "id" + Math.random().toString(16).slice(2);
export const productSlice = createSlice({
  name: 'product',
  initialState:{
    value: {}
  },
  reducers: {
    edit_product: (state, {payload})=>{
      state.value = {...state.value, ...payload};
    },
    update_product: (state, {payload})=>{
      let tables = ["ProductVendors", "ProductDescriptions", "ProductBarCodes", "ProductReplaces"]
      for (let i = 0; i < tables.length; i++) {
        payload[tables[i]] = payload[tables[i]]?.map(ele => {return {...ele, fakeID: unique()}})
      }
      
      state.value = payload;
    },
    add_new_row_tables_product: (state, {payload})=>{
      // let {tableName} = payload
      state.value[payload] = state.value[payload] ? state.value[payload]:[];
      switch (payload) {
        case "ProductVendors":
          state.value[payload].push({
            fakeID: unique() , "VendorName": "", "CurrName": null, "UnitName": null, "ProductID": state.value.ProductID , "VendorId": "",
            "MainVendor": false, "PrefferdVendor": false, "CurrId": 0, "UnitId": 0, "DelivaryDays": 0, "TaxValue": 0.0,
            "TaxPercent": 0.0, "MainPrice": 0.0, "MainDesc": 0.0, "QtyDesc": 0.0, "EarlyDesc": 0.0, "TotalCost": 0.0, "RowNO": 0
          })
          break;

        case "ProductDescriptions":
          state.value[payload]?.push({ fakeID: unique() , Description: ""})
          break;

        case "ProductBarCodes":
          state.value[payload]?.push({ fakeID: unique() , Barcode: "", SalePrice: ""})
          break;
          
        case "ProductReplaces":
          state.value[payload]?.push({ fakeID: unique() , ReplaceID: "", ReplaceName: ""})
          break;

        default:
          state.value = state.value
          break;
      }
    },
    remove_row_tables_product: (state, {payload})=>{
      let {tableName, fakeID} = payload;
      state.value[tableName] = state.value[tableName].filter(ele => ele.fakeID !== fakeID)
    },
    edit_row_tables_product: (state, {payload})=>{
      let {tableName, fakeID, prop, value} = payload;
      state.value[tableName] = state.value[tableName]?.map(ele => {
        if(ele.fakeID === fakeID){
          return {...ele, [prop]: value};
        }else{
          return ele;
        }
      })
    },
    initial_state_product: (state)=>{
      state.value = {}
    }
  },
})

// Action creators are generated for each case reducer function
export const { edit_product, edit_row_tables_product, initial_state_product, update_product, add_new_row_tables_product, remove_row_tables_product } = productSlice.actions

export default productSlice.reducer

