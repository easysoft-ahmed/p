import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const BranchSlice = createSlice({
  name: 'branch',
  initialState:{
    value: {}
  },
  reducers: {
    edit_branch: (state, {payload})=>{
        console.log(payload);
        
        state.value = {...state.value, ...payload};        
    },
    update_branch: (state, {payload})=>{
        state.value = payload;
    },
    init_branch: (state)=>{
        state.value = {
            AccDailyId: "", AccDailyName: ""
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_branch, update_branch,  init_branch } = BranchSlice.actions

export default BranchSlice.reducer

