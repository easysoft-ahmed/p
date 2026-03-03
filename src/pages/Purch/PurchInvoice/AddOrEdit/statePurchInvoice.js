import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';
import { calcNetTotal } from './helper';
import { unique } from '../../../../helpers';


let defaultRowPurchCashes = {
  fakeID: unique() , SafeType: "", SafeId: "", SafeName: "", Value: ""
}


export const PurchInvoiceSlice = createSlice({
  name: 'purch_invoice',
  initialState:{
    value: {}
  },
  reducers: {
    edit_purch_invoice: (state, {payload})=>{      
        state.value = {...state.value, ...payload};        
    },
    update_purch_invoice: (state, {payload})=>{
        state.value = payload;
    },
    init_state_purch_invoice: (state)=>{
      state.value = {
        DocID: "", DocNo: "", BranchId: 1, SerialId: "", OtherDocNo: "", DocDate:  new Date().toString(), DueDate:  new Date().toString(),
        SideType: 1, VendorId: "", SellerID: "", CurrID: "", CurrRate: 0.0, Notes: "", SumTotal: 0.0, DiscountP: 0.0, DiscountValue: 0.0,
        TaxID: 0, TaxTSP: 0.0, TaxRate: 0.0, NetTotal: 0.0, NetTotalTafqit: "خمسة ألاف و سبعة مائة جنية", PayType: 0, RelatedDocID: 0,
        RelatedDoc: "", PurchItems: [], PurchCashes: [defaultRowPurchCashes], PurchChecks: []
      }
    },
    modified_tables_purch_invoice: (state, {payload})=>{
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
        if(tableName === "PurchItems"){
          state.value.PurchItems = state.value?.PurchItems?.map(ele => {
            return {...ele, Total: ele.Qty * ele.Price}
          })
        }
    },
    updateTotalValueAndTax: (state)=>{      
      state.value.SumTotal = state?.value?.PurchItems?.reduce(function(total, item){return total + item.Total}, 0);
      state.value.NetTotal = calcNetTotal(state?.value);
      if(state.value?.PurchCashes?.length === 1){
        state.value.PurchCashes = state.value?.PurchCashes?.map((ele, indx)=>{
          if(indx === 0){
            return {...ele, Value: state.value?.NetTotal}
          }else{
            return {...ele}
          }
        })
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {updateTotalValueAndTax, edit_purch_invoice, update_purch_invoice,  init_state_purch_invoice, modified_tables_purch_invoice } = PurchInvoiceSlice.actions

export default PurchInvoiceSlice.reducer

