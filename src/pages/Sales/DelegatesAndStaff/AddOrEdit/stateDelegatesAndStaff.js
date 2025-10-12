import { createSlice } from '@reduxjs/toolkit'


export const DelegatesAndStaffSlice = createSlice({
  name: 'delegates_and_staff',
  initialState:{
    value: {}
  },
  reducers: {
    edit_delegates_and_staff: (state, {payload})=>{      
        state.value = {...state.value, ...payload};        
    },
    update_delegates_and_staff: (state, {payload})=>{
        state.value = payload;
    },
    init_delegates_and_staff: (state)=>{
      state.value = {
        SellerId: "", SellerName: "", Address: "", Phone: "", Mobile: "",
        NationalID: "", Sex: 0, Religon: 0, MonthlySalary: 0.0, DelySalary: 0.0,
        IsSales: false, IsPurch: false, IsFin: false, IsSupport: false, IsTeleSales: false, Notes: ""
}
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_delegates_and_staff, update_delegates_and_staff,  init_delegates_and_staff } = DelegatesAndStaffSlice.actions

export default DelegatesAndStaffSlice.reducer

