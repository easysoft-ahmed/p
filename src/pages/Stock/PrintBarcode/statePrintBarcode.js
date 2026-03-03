import { createSlice } from '@reduxjs/toolkit'


export const PrintBarcodeSlice = createSlice({
  name: 'print_barcode',
  initialState:{
    value: {}
  },
  reducers: {
    edit_print_barcode: (state, {payload})=>{
        state.value = {...state.value, ...payload};
    },
    update_print_barcode: (state, {payload})=>{
        state.value = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { edit_print_barcode, update_print_barcode } = PrintBarcodeSlice.actions

export default PrintBarcodeSlice.reducer

