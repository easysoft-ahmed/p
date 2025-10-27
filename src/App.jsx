import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import Home from "./pages/Home/Home"
import Accounts from "./pages/Acc/Accounts"
import HelpsCodes from "./pages/Acc/HelpsCodes/HelpsCodes"
import AddEditHelpsCode from "./pages/Acc/HelpsCodes/AddOrEdit/AddEditHelpsCode"
import AccountsCodes from "./pages/Acc/AccountsCodes/AccountsCodes"
import Login from "./pages/Login/Login"
import Financial from "./pages/Fin/Financial"
import Currencies from "./pages/Fin/Currencies/Currencies"
import Taxes from "./pages/Fin/Taxes/Taxes"
import Boxs from "./pages/Fin/Boxs/Boxs"
import Banks from "./pages/Fin/Banks/Banks"
import "./App.css"
import AddEditCurrencies from "./pages/Fin/Currencies/AddOrEdit/AddEditCurrencies"
import AddEditTaxes from "./pages/Fin/Taxes/AddOrEdit/AddEditTaxes"
import AddEditBoxs from "./pages/Fin/Boxs/AddOrEdit/AddEditBoxs"
import AddEditBanks from "./pages/Fin/Banks/AddOrEdit/AddEditBanks"
import RankCashFlow from "./pages/Fin/RankCashFlow/RankCashFlow"
import CodeCashFlow from "./pages/Fin/CodeCashFlow/CodeCashFlow"
import AddEditCodeCashFlow from "./pages/Fin/CodeCashFlow/AddOrEdit/AddEditCodeCashFlow"
import AddEditRankCashFlow from "./pages/Fin/RankCashFlow/AddOrEdit/AddEditRankCashFlow"
import CashReceipt from "./pages/Fin/CashReceipt/CashReceipt"
import AddEditCashReceipt from "./pages/Fin/CashReceipt/AddOrEdit/AddEditCashReceipt"
import PaymentReceipt from "./pages/Fin/PaymentReceipt/PaymentReceipt"
import AddEditPaymentReceipt from "./pages/Fin/PaymentReceipt/AddOrEdit/AddEditPaymentReceipt"
import IncomingChecks from "./pages/Fin/IncomingChecks/IncomingChecks"
import AddEditIncomingChecks from "./pages/Fin/IncomingChecks/AddOrEdit/AddEditIncomingChecks"
import AddEditOutgoingChecks from "./pages/Fin/OutgoingChecks/AddOrEdit/AddEditOutcomingChecks"
import OutgoingChecks from "./pages/Fin/OutgoingChecks/OutgoingChecks"
import DepositInWallet from "./pages/Fin/DepositInWallet/DepositInWallet.jsx"
import AddEditDepositInWallet from "./pages/Fin/DepositInWallet/AddOrEdit/AddEditDepositInWallet"
import DepositIncomingChecks from "./pages/Fin/DepositIncomingChecks/DepositIncomingChecks.jsx"
import AddEditDepositIncomingChecks from "./pages/Fin/DepositIncomingChecks/AddOrEdit/AddEditDepositIncomingChecks.jsx"
import ExchangeOutgoingChecks from "./pages/Fin/ExchangeOutgoingChecks/ExchangeOutgoingChecks.jsx"
import AddEditExchangeOutgoingChecks from "./pages/Fin/ExchangeOutgoingChecks/AddOrEdit/AddEditExchangeOutgoingChecks.jsx"
import ReturnOutgoingChecks from "./pages/Fin/ReturnOutgoingChecks/ReturnOutgoingChecks.jsx"
import AddEditReturnOutgoingChecks from "./pages/Fin/ReturnOutgoingChecks/AddOrEdit/AddEditReturnOutgoingChecks.jsx"
import ReturnIncomingChecks from "./pages/Fin/ReturnIncomingChecks/ReturnIncomingChecks.jsx"
import AddEditReturnIncomingChecks from "./pages/Fin/ReturnIncomingChecks/AddOrEdit/AddEditReturnIncomingChecks.jsx"
import MoneyTransfer from "./pages/Fin/MoneyTransfer/MoneyTransfer.jsx"
import AddEditMoneyTransfer from "./pages/Fin/MoneyTransfer/AddOrEdit/AddEditMoneyTransfer.jsx"
import FinAdjustments from "./pages/Fin/FinAdjustments/FinAdjustments.jsx"
import AddEditFinAdjustments from "./pages/Fin/FinAdjustments/AddOrEdit/AddEditFinAdjustments.jsx"
import InstallmentsData from "./pages/Fin/InstallmentsData/InstallmentsData.jsx"
import AddEditInstallmentsData from "./pages/Fin/InstallmentsData/AddOrEdit/AddEditInstallmentsData.jsx"
import Sales from "./pages/Sales/Sales.jsx"
import Cities from "./pages/Sales/Cities/Cities.jsx"
import AddEditCities from "./pages/Sales/Cities/AddOrEdit/AddEditCities.jsx"
import DelegatesAndStaff from "./pages/Sales/DelegatesAndStaff/DelegatesAndStaff.jsx"
import AddEditDelegatesAndStaff from "./pages/Sales/DelegatesAndStaff/AddOrEdit/AddEditDelegatesAndStaff.jsx"
import CustomerSource from "./pages/Sales/CustomerSource/CustomerSource.jsx"
import AddEditCustomerSource from "./pages/Sales/CustomerSource/AddOrEdit/AddEditCustomerSource.jsx"
import Customers from "./pages/Sales/Customers/Customers.jsx"
import AddEditCustomers from "./pages/Sales/Customers/AddOrEdit/AddEditCustomers.jsx"
import Sale from "./pages/Sales/Sale/Sale.jsx"
import AddEditSale from "./pages/Sales/Sale/AddOrEdit/AddEditSale.jsx"
import OffersPrice from "./pages/Sales/OffersPrice/OffersPrice.jsx"
import AddEditOffersPrice from "./pages/Sales/OffersPrice/AddOrEdit/AddEditOffersPrice.jsx"
import SalesInvoice from "./pages/Sales/SalesInvoice/SalesInvoice.jsx"
import AddEditSalesInvoice from "./pages/Sales/SalesInvoice/AddOrEdit/AddEditSalesInvoice.jsx"
import SalesReturnInvoice from "./pages/Sales/SalesReturnInvoice/SalesReturnInvoice.jsx"
import AddEditSalesReturnInvoice from "./pages/Sales/SalesReturnInvoice/AddOrEdit/AddEditSalesReturnInvoice.jsx"
import AddEditAccountCodes from "./pages/Acc/AccountsCodes/AddOrEdit/AddEditAccountCodes.jsx"
import Purch from "./pages/Purch/Purch.jsx"
import Suppliers from "./pages/Purch/Suppliers/Suppliers.jsx"
import AddEditSuppliers from "./pages/Purch/Suppliers/AddOrEdit/AddEditSuppliers.jsx"
import PurchInvoice from "./pages/Purch/PurchInvoice/PurchInvoice.jsx"
import AddEditPurchInvoice from "./pages/Purch/PurchInvoice/AddOrEdit/AddEditPurchInvoice.jsx"
import PurchReturnInvoice from "./pages/Purch/PurchReturnInvoice/PurchReturnInvoice.jsx"
import AddEditPurchReturnInvoice from "./pages/Purch/PurchReturnInvoice/AddOrEdit/AddEditPurchReturnInvoice.jsx"
import Units from "./pages/Stock/Units/Units.jsx"
import AddEditUnits from "./pages/Stock/Units/AddOrEdit/AddEditUnits.jsx"
import Stock from "./pages/Stock/Stock.jsx"
import Colors from "./pages/Stock/Colors/Colors.jsx"
import AddEditColors from "./pages/Stock/Colors/AddOrEdit/AddEditColors.jsx"
import SizesGroup from "./pages/Stock/SizesGroup/SizesGroup.jsx"
import AddEditSizesGroup from "./pages/Stock/SizesGroup/AddOrEdit/AddEditSizesGroup.jsx"
import AddEditSizes from "./pages/Stock/Sizes/AddOrEdit/AddEditSizes.jsx"
import AddEditCountryOfOrigin from "./pages/Stock/CountryOfOrigin/AddOrEdit/AddEditCountryOfOrigin.jsx"
import Sizes from "./pages/Stock/Sizes/Sizes.jsx"
import CountryOfOrigin from "./pages/Stock/CountryOfOrigin/CountryOfOrigin.jsx"
import Stores from "./pages/Stock/Stores/Stores.jsx"
import AddEditStores from "./pages/Stock/Stores/AddOrEdit/AddEditStores.jsx"
import Products from "./pages/Stock/Products/Products.jsx"
import AddEditProducts from "./pages/Stock/Products/AddOrEdit/AddEditProducts.jsx"
import { Provider, useDispatch, useSelector } from "react-redux"
import PrintBarcode from "./pages/Stock/PrintBarcode/PrintBarcode.jsx"
import StoreMovement from "./pages/Stock/StoreMovement/StoreMovement.jsx"
import AddEditStoreMovement from "./pages/Stock/StoreMovement/AddOrEdit/AddEditStoreMovement.jsx"
import StoreTransform from "./pages/Stock/StoreTransform/StoreTransform.jsx"
import AddEditStoreTransform from "./pages/Stock/StoreTransform/AddOrEdit/AddEditStoreTransform.jsx"
import RealInventory from "./pages/Stock/RealInventory/RealInventory.jsx"
import AddEditRealInventory from "./pages/Stock/RealInventory/AddOrEdit/AddEditRealInventory.jsx"
import PriceList from "./pages/Stock/PriceList/PriceList.jsx"
import AddEditPriceList from "./pages/Stock/PriceList/AddOrEdit/AddEditPriceList.jsx"
import SuppliersTypes from "./pages/Purch/SuppliersTypes/SuppliersTypes.jsx"
import AddEditSuppliersTypes from "./pages/Purch/SuppliersTypes/AddOrEdit/AddEditSuppliersTypes.jsx"
import CustomersTypes from "./pages/Sales/CustomersTypes/CustomersTypes.jsx"
import AddEditCustomersTypes from "./pages/Sales/CustomersTypes/AddOrEdit/AddEditCustomersTypes.jsx"
import { Modal } from "antd"
import { useState } from "react"
import { edit_global } from "./redux/stateGlobal.js";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function App() {
  const dispatch = useDispatch();
  const globalState = useSelector(state => state.global.value)
  return (
    <>


      <Modal
        open={globalState.popupF3}
        footer={false}
        onCancel={()=>dispatch(edit_global({popupF3: false}))}
      >
        {globalState?.popupF3Component}
      </Modal>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="accounts">
              <Route index element={<Accounts />} />
              {/* <Route path="accounts_codes" element={} /> */}
              <Route path="helps_codes" >
                <Route index  element={<HelpsCodes />} />
                <Route path="add" element={<AddEditHelpsCode />}/>
                <Route path="edit/:id" element={<AddEditHelpsCode />}/>
              </Route>
              <Route path="accounts_codes">
                <Route index element={<AccountsCodes />} />
                <Route path="add" element={<AddEditAccountCodes />} />
                <Route path="edit/:id" element={<AddEditAccountCodes />} />
              </Route>
            </Route>
            <Route path="financial">
              <Route index element={<Financial />} />
              <Route path="currencies" >
                  <Route index element={<Currencies />} />
                  <Route path="add" element={<AddEditCurrencies />} />
                  <Route path="edit/:id" element={<AddEditCurrencies />} />
              </Route>
              <Route path="taxes" >
                <Route index  element={<Taxes />}/>
                <Route path="add"  element={<AddEditTaxes />}/>
                <Route path="edit/:id"  element={<AddEditTaxes />}/>
              </Route>
              <Route path="boxs">
                <Route index element={<Boxs />} />
                <Route path="add" element={<AddEditBoxs />} />
                <Route path="edit/:id" element={<AddEditBoxs />} />
              </Route>
              <Route path="banks">
                <Route index element={<Banks />} />
                <Route path="add" element={<AddEditBanks />} />
                <Route path="edit/:id" element={<AddEditBanks />} />
              </Route>
              <Route path="rank_cash_flow">
                <Route index element={<RankCashFlow />} />
                <Route path="add" element={<AddEditRankCashFlow />} />
              </Route>
              <Route path="code_cash_flow">
                <Route index element={<CodeCashFlow />} />
                <Route path="add" element={<AddEditCodeCashFlow />} />
              </Route>
              <Route path="cash_receipt">
                <Route index element={<CashReceipt />} />
                <Route path="add" element={<AddEditCashReceipt />} />
              </Route>
              <Route path="payment_receipt">
                <Route index element={<PaymentReceipt />} />
                <Route path="add" element={<AddEditPaymentReceipt />} />
              </Route>
              <Route path="incoming_checks">
                <Route index element={<IncomingChecks />} />
                <Route path="add" element={<AddEditIncomingChecks />} />
              </Route>
              <Route path="outgoing_checks">
                <Route index element={<OutgoingChecks />} />
                <Route path="add" element={<AddEditOutgoingChecks />} />
              </Route>
              <Route path="deposit_in_wallet">
                <Route index element={<DepositInWallet />} />
                <Route path="add" element={<AddEditDepositInWallet />} />
              </Route>
              <Route path="deposit_incoming_checks">
                <Route index element={<DepositIncomingChecks />} />
                <Route path="add" element={<AddEditDepositIncomingChecks />} />
              </Route>
              <Route path="exchange_outgoing_checks">
                <Route index element={<ExchangeOutgoingChecks />} />
                <Route path="add" element={<AddEditExchangeOutgoingChecks />} />
              </Route>
              <Route path="return_incoming_checks">
                <Route index element={<ReturnIncomingChecks />} />
                <Route path="add" element={<AddEditReturnIncomingChecks />} />
              </Route>
              <Route path="return_outgoing_checks">
                <Route index element={<ReturnOutgoingChecks />} />
                <Route path="add" element={<AddEditReturnOutgoingChecks />} />
              </Route>
              <Route path="money_transfer">
                <Route index element={<MoneyTransfer />} />
                <Route path="add" element={<AddEditMoneyTransfer />} />
              </Route>
              <Route path="fin_adjustments">
                <Route index element={<FinAdjustments />} />
                <Route path="add" element={<AddEditFinAdjustments />} />
              </Route>
              <Route path="installments_data">
                <Route index element={<InstallmentsData />} />
                <Route path="add" element={<AddEditInstallmentsData />} />
              </Route>
            </Route>
            
            <Route path="stock">
              <Route index element={<Stock />} />
              <Route path="units">
                <Route index element={<Units />} />
                <Route path="add" element={<AddEditUnits />} />
                <Route path="edit/:id" element={<AddEditUnits />} />
              </Route>
              <Route path="colors">
                <Route index element={<Colors />} />
                <Route path="add" element={<AddEditColors />} />
                <Route path="edit/:id" element={<AddEditColors />} />
              </Route>
              <Route path="sizes_group">
                <Route index element={<SizesGroup />} />
                <Route path="add" element={<AddEditSizesGroup />} />
              </Route>
              <Route path="sizes">
                <Route index element={<Sizes />} />
                <Route path="add" element={<AddEditSizes />} />
                <Route path="edit/:id" element={<AddEditSizes />} />
              </Route>
              <Route path="country_of_origin">
                <Route index element={<CountryOfOrigin />} />
                <Route path="add" element={<AddEditCountryOfOrigin />} />
                <Route path="edit/:id" element={<AddEditCountryOfOrigin />} />
              </Route>
              <Route path="stores">
                <Route index element={<Stores />} />
                <Route path="add" element={<AddEditStores />} />
                <Route path="edit/:id" element={<AddEditStores />} />
              </Route>
              <Route path="products">
                <Route index element={<Products />} />
                <Route path="add" element={<AddEditProducts />} />
                <Route path="edit/:id" element={<AddEditProducts />} />
              </Route>
              <Route path="stores_movement">
                <Route index element={<StoreMovement />} />
                <Route path="add" element={<AddEditStoreMovement />} />
                <Route path="edit/:id" element={<AddEditStoreMovement />} />
              </Route>
              <Route path="store_transform">
                <Route index element={<StoreTransform />} />
                <Route path="add" element={<AddEditStoreTransform />} />
                <Route path="edit/:id" element={<AddEditStoreTransform />} />
              </Route>
              <Route path="real_inventory">
                <Route index element={<RealInventory />} />
                <Route path="add" element={<AddEditRealInventory />} />
              </Route>
              <Route path="price_list">
                <Route index element={<PriceList />} />
                <Route path="add" element={<AddEditPriceList />} />
              </Route>
              <Route path="print_barcode" element={<PrintBarcode />} />

            </Route>
            <Route path="purch">
              <Route index element={<Purch />} />
              <Route path="suppliers">
                <Route index element={<Suppliers />} />
                <Route path="add" element={<AddEditSuppliers />} />
                <Route path="edit/:id" element={<AddEditSuppliers />} />
              </Route>
              <Route path="suppliers_types">
                <Route index element={<SuppliersTypes />} />
                <Route path="add" element={<AddEditSuppliersTypes />} />
                <Route path="edit/:id" element={<AddEditSuppliersTypes />} />
              </Route>
              <Route path="purch_invoice">
                <Route index element={<PurchInvoice />} />
                <Route path="add" element={<AddEditPurchInvoice />} />
                <Route path="edit/:id" element={<AddEditPurchInvoice />} />
              </Route>
              <Route path="purch_return_invoice">
                <Route index element={<PurchReturnInvoice />} />
                <Route path="add" element={<AddEditPurchReturnInvoice />} />
                <Route path="edit/:id" element={<AddEditPurchReturnInvoice />} />
              </Route>
            </Route>
            
            <Route path="sales">
              <Route index element={<Sales />} />
              <Route path="cities">
                <Route index element={<Cities />} />
                <Route path="add" element={<AddEditCities />} />
              </Route>
              <Route path="delegates_staff">
                <Route index element={<DelegatesAndStaff />} />
                <Route path="add" element={<AddEditDelegatesAndStaff />} />
                <Route path="edit/:id" element={<AddEditDelegatesAndStaff />} />
              </Route>
              <Route path="customer_source">
                <Route index element={<CustomerSource />} />
                <Route path="add" element={<AddEditCustomerSource />} />
              </Route>
              <Route path="customers">
                <Route index element={<Customers />} />
                <Route path="add" element={<AddEditCustomers />} />
                <Route path="edit/:id" element={<AddEditCustomers />} />
              </Route>
              <Route path="customers_types">
                <Route index element={<CustomersTypes />} />
                <Route path="add" element={<AddEditCustomersTypes />} />
                <Route path="edit/:id" element={<AddEditCustomersTypes />} />
              </Route>
              <Route path="sale">
                <Route index element={<Sale />} />
                <Route path="add" element={<AddEditSale />} />
              </Route>
              <Route path="offers_price">
                <Route index element={<OffersPrice />} />
                <Route path="add" element={<AddEditOffersPrice />} />
              </Route>
              <Route path="sales_invoice">
                <Route index element={<SalesInvoice />} />
                <Route path="add" element={<AddEditSalesInvoice />} />
                <Route path="edit/:id" element={<AddEditSalesInvoice />} />
              </Route>
              <Route path="sales_return_invoice">
                <Route index element={<SalesReturnInvoice />} />
                <Route path="add" element={<AddEditSalesReturnInvoice />} />
              </Route>
            </Route>
          </Route>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
      
  )
}

export default App
