import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const SupplierSlice = createSlice({
  name: 'suppliers',
  initialState:{
    value: {}
  },
  reducers: {
    edit_supplier: (state, {payload})=>{      
        state.value = {...state.value, ...payload};
        console.log(payload);
        
        
    },
    update_supplier: (state, {payload})=>{
        state.value = payload;
    },
    init_state_supplier: (state)=>{
      state.value = {
        VendorId: "", VendorName: "", IsStoped: false, VendorTypeID: "", Address: "",
        Phone: "", Mobail: "", Fax: "", CreditLimit: "", CreditLimitPeriod: "", SellerID: "",
        CurrId: "", CurrRate: "", IsFixedAVendor: false, IsServiceVendor: false, IsImportVendor: false,
        IsClientVendor: false, FirstBalDate: new Date(), FirstBal: "", IsDebit: false, IsCredit: true,
        PaymentPart: "", InsureWork: "", OfficalNo: "", TaxCrad: "", TaxNo: "", AccId: "0"
      }
    },
    modified_tables_supplier: (state, {payload})=>{
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
        
        // state.value.Total = state.value[tableName]?.reduce((totalValue, row)=>{return totalValue + Number(row.Qty)}, 0) || 0
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const {edit_supplier, update_supplier,  init_state_supplier, modified_tables_supplier } = SupplierSlice.actions

export default SupplierSlice.reducer

