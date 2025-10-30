import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const CompanyDataSlice = createSlice({
  name: 'company_data',
  initialState:{
    value: {}
  },
  reducers: {
    edit_company_data: (state, {payload})=>{
        state.value = {...state.value, ...payload};        
    },
    update_company_data: (state, {payload})=>{
        state.value = payload;
    },
    init_company_data: (state)=>{
        state.value = { 
          CompName: "", Addrss: "", Email: "", RegNumber: "", TaxCard: "",
          RegTax: "", Fax: "", Phone: "", Mobile: "", FirstDate: dayjs().format("DD/MM/YYYY"), LastDate: dayjs().format("DD/MM/YYYY")

        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_company_data, update_company_data,  init_company_data } = CompanyDataSlice.actions

export default CompanyDataSlice.reducer

