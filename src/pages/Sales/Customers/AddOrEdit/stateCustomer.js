import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const CustomerSlice = createSlice({
  name: 'customer',
  initialState:{
    value: {}
  },
  reducers: {
    edit_customer: (state, {payload})=>{      
        state.value = {...state.value, ...payload};
    },
    update_customer: (state, {payload})=>{
        state.value = payload;
    },
    init_state_customer: (state)=>{
      state.value = {
        CustomerID:"" ,CustomerName: "", IsStoped: false, CustTypeID: 1, SourceId: 1, Address: "",
        Phone: "", Mobile: "", Fax: "", EMail: "", CreditLimit: 0.0, CreditLimitPeriod: 0, SellerID: 0, CurrID: 0, CurrRate: 0.0,
        IsVendorCustomer: false, FirstBalDate: new Date(), FirstBal: 0.0, IsDebit: true, IsCredit: false, OfficalNo: "",
        TaxCrad: "", TaxNo: "", AreaID: 0, CustPricing: 0, PriceListNo: 0, AccId: "", CarType: "", CarModal: "", CarChasie: "",
        CarColor: "", CarMotor: "", CarInjen: "", NationalId:"", Nationality:"", Notes:""
}
    },
    modified_tables_customer: (state, {payload})=>{
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
    }
  },
})

// Action creators are generated for each case reducer function
export const {edit_customer, update_customer,  init_state_customer, modified_tables_customer } = CustomerSlice.actions

export default CustomerSlice.reducer

