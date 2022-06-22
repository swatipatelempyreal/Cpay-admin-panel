import { Route, Routes } from "react-router-dom";
import {Customer, CustomerBookingList, EditCustomer, AddCustomer, BookingPaid, BookingOverdue, ViewBooking, BookingCancelled, WalletTransaction} from "../Components/Admin/Customer";
import { Merchants, MerchantTransaction } from "../Components/Admin/Merchant";
import { AdminLayout } from '../Components/Layout'

const AdminRoutes = () => {
  return (
    
    <>
    <AdminLayout/>
    <Routes>
      <Route exact path="/customer" element={<Customer />} />
      <Route exact path="/add-customer" element={<AddCustomer />} />
      <Route exact path="/edit-customer" element={<EditCustomer />} />
      <Route exact path="/customer-booking-list" element={<CustomerBookingList />} />
      <Route exact path="/booking-paid" element={<BookingPaid />} />
      <Route exact path="/booking-overdue" element={<BookingOverdue />} />
      <Route exact path="/booking-cancelled" element={<BookingCancelled />} />
      <Route exact path="/view-booking" element={<ViewBooking />} />
      <Route exact path="/wallet-transaction" element={<WalletTransaction />} />
      <Route exact path="/merchants" element={<Merchants />} />
      <Route exact path="/merchant-transactions" element={<MerchantTransaction />} />
    
    </Routes>
  </>
  )
}

export default AdminRoutes