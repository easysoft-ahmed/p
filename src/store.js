import { configureStore } from '@reduxjs/toolkit'
import unit from "./pages/Stock/Units/AddOrEdit/stateUnit"
import color from "./pages/Stock/Colors/AddOrEdit/stateColor"
import stock from "./pages/Stock/Stores/AddOrEdit/stateStock"
import product from "./pages/Stock/Products/AddOrEdit/stateProduct"
import size from "./pages/Stock/Sizes/AddOrEdit/stateSize"
import size_group from "./pages/Stock/SizesGroup/AddOrEdit/stateSizeGroup"
import country_of_origin from "./pages/Stock/CountryOfOrigin/AddOrEdit/stateCountryOfOrigin"
import store_movement from "./pages/Stock/StoreMovement/AddOrEdit/stateStoreMovement"
import store_transform from "./pages/Stock/StoreTransform/AddOrEdit/stateStoreTransform"
import print_barcode from "./pages/Stock/PrintBarcode/statePrintBarcode"
import supplier from "./pages/Purch/Suppliers/AddOrEdit/stateSupplier"
import supplier_type from "./pages/Purch/SuppliersTypes/AddOrEdit/stateSupplierType"
import delegates_and_staff from "./pages/Sales/DelegatesAndStaff/AddOrEdit/stateDelegatesAndStaff"
import customer from "./pages/Sales/Customers/AddOrEdit/stateCustomer"
import customer_type from "./pages/Sales/CustomersTypes/AddOrEdit/stateCustomersTypes"
import bank from "./pages/Fin/Banks/AddOrEdit/stateBank"
import tax from "./pages/Fin/Taxes/AddOrEdit/stateTax"
import currency from "./pages/Fin/Currencies/AddOrEdit/stateCurrency"
import box from "./pages/Fin/Boxs/AddOrEdit/stateBox"
import acc_code from "./pages/Acc/AccountsCodes/AddOrEdit/stateAccountCode"
import acc_help from "./pages/Acc/HelpsCodes/AddOrEdit/stateHelpsCode"
import sales_invoice from "./pages/Sales/SalesInvoice/AddOrEdit/stateSalesInvoice"
import purch_invoice from "./pages/Purch/PurchInvoice/AddOrEdit/statePurchInvoice"
import return_purch_invoice from "./pages/Purch/PurchReturnInvoice/AddOrEdit/stateReturnPurchInvoice"
import global from "./redux/stateGlobal"



export const store = configureStore({
  reducer: { global,
    unit, color, stock, size, size_group, country_of_origin, product,print_barcode, store_movement, store_transform, supplier, supplier_type,
    delegates_and_staff, customer, customer_type, bank, tax, currency, box, acc_code, acc_help, sales_invoice, purch_invoice,
    return_purch_invoice
  },
})

