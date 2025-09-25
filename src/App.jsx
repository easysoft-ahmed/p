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
function App() {
  
  return (
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
            </Route>
            <Route path="accounts_codes">
              <Route index element={<AccountsCodes />} />
              <Route path="add" element={<AddEditAccountCodes />} />
            </Route>
          </Route>
          <Route path="financial">
            <Route index element={<Financial />} />
            <Route path="currencies" >
                <Route index element={<Currencies />} />
                <Route path="add" element={<AddEditCurrencies />} />
            </Route>
            <Route path="taxes" >
              <Route index  element={<Taxes />}/>
              <Route path="add"  element={<AddEditTaxes />}/>
            </Route>
            <Route path="boxs">
              <Route index element={<Boxs />} />
              <Route path="add" element={<AddEditBoxs />} />
            </Route>
            <Route path="banks">
              <Route index element={<Banks />} />
              <Route path="add" element={<AddEditBanks />} />
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
          <Route path="sales">
            <Route index element={<Sales />} />
            <Route path="cities">
              <Route index element={<Cities />} />
              <Route path="add" element={<AddEditCities />} />
            </Route>
            <Route path="delegates_staff">
              <Route index element={<DelegatesAndStaff />} />
              <Route path="add" element={<AddEditDelegatesAndStaff />} />
            </Route>
            <Route path="customer_source">
              <Route index element={<CustomerSource />} />
              <Route path="add" element={<AddEditCustomerSource />} />
            </Route>
            <Route path="customers">
              <Route index element={<Customers />} />
              <Route path="add" element={<AddEditCustomers />} />
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
      
  )
}

export default App
