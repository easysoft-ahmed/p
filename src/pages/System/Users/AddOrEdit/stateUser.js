import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs';


export const UserSlice = createSlice({
  name: 'user',
  initialState:{
    value: {}
  },
  reducers: {
    edit_user: (state, {payload})=>{      
      state.value = {...state.value, ...payload};
    },
    update_user: (state, {payload})=>{
      state.value = payload;
    },
    init_state_user: (state)=>{
      state.value = {
        UserID: "", UserName: "", UserRole: "", UserPassword: "", Email: "", CustomerID: ""
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {edit_user, update_user,  init_state_user, modified_tables_user } = UserSlice.actions

export default UserSlice.reducer

