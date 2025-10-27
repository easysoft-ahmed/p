import { createSlice } from '@reduxjs/toolkit'


export const globalSlice = createSlice({
  name: 'global',
  initialState:{
    value: {popupF3: false, popupF3Component: null, user_login: JSON.parse(window.localStorage.getItem("user_login")) || null}
  },
  reducers: {
    edit_global: (state, {payload})=>{
      console.log(payload);
      
      state.value = {...state.value, ...payload};
    },
    update_global: (state, {payload})=>{
      state.value = payload;
    },
    set_login_user: (state, {payload})=>{
      if(payload?.Token){
        localStorage.setItem("user_login", JSON.stringify(payload));
        state.value.user_login = payload;
      }else{
        state.value.user_login = null
      }
    },
    logout_user: (state)=>{
      localStorage.removeItem("user_login")
      state.value.user_login = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const {logout_user, set_login_user, initial_state_stores, edit_global, update_global } = globalSlice.actions

export default globalSlice.reducer

