import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';
import { calcNetTotal } from './helper';
import { unique } from '../../../../helpers';


let defaultRowSalesCashes = {
  fakeID: unique() , SafeType: "", SafeId: "", SafeName: "", Value: ""
}


export const RetSalesInvoiceSlice = createSlice({
  name: 'ret_sales_invoice',
  initialState:{
    value: {}
  },
  reducers: {
    edit_ret_sales_invoice: (state, {payload})=>{      
        state.value = {...state.value, ...payload};        
    },
    update_ret_sales_invoice: (state, {payload})=>{
        state.value = payload;
    },
    init_state_ret_sales_invoice: (state)=>{
      state.value = { 
        BranchId: 1, SerialId: "", OtherDocNo: "", DocDate: new Date().toString(), DueDate: new Date().toString(), SideType: 0,
        CustomerId: "", SellerID: "", CurrID: "", CurrRate: 0.0, Notes: "", SumTotal: 0, DiscountP: 0.0, DiscountValue: 0.0,
        TaxID: 0, TaxTSP: 0.0, TaxRate: 0.0, NetTotal: 0.0, NetTotalTafqit: "", PayType: 0, RelatedDocID: 0,
        RelatedDoc: "", AccId: "", Status: "0", QRCodeData: "", QRCodeImage: null, SalesItems: [],
        SalesCashes: [defaultRowSalesCashes],  PurchChecks: []
      }
    },
    modified_tables_ret_sales_invoice: (state, {payload})=>{
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
        if(tableName === "SalesItems"){
          state.value.SalesItems = state.value?.SalesItems?.map(ele => {
            return {...ele, Total: ele.Qty * ele.Price}
          })
        }
    },
    updateTotalValueAndTax: (state)=>{      
      state.value.SumTotal = state?.value?.SalesItems?.reduce(function(total, item){return total + item.Total}, 0);
      state.value.NetTotal = calcNetTotal(state?.value);
      if(state.value?.SalesCashes?.length === 1){
        state.value.SalesCashes = state.value?.SalesCashes?.map((ele, indx)=>{
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
export const {updateTotalValueAndTax, edit_ret_sales_invoice, update_ret_sales_invoice,  init_state_ret_sales_invoice, modified_tables_ret_sales_invoice } = RetSalesInvoiceSlice.actions

export default RetSalesInvoiceSlice.reducer

