import { configureStore } from '@reduxjs/toolkit'
import unit from "./pages/Stock/Units/AddOrEdit/stateUnit"
import color from "./pages/Stock/Colors/AddOrEdit/stateColor"
import stock from "./pages/Stock/Stores/AddOrEdit/stateStock"
import product from "./pages/Stock/Products/AddOrEdit/stateProduct"
import size from "./pages/Stock/Sizes/AddOrEdit/stateSize"
import size_group from "./pages/Stock/SizesGroup/AddOrEdit/stateSizeGroup"
import country_of_origin from "./pages/Stock/CountryOfOrigin/AddOrEdit/stateCountryOfOrigin"



export const store = configureStore({
  reducer: {
    unit, color, stock, size, size_group, country_of_origin, product

  },
})

