import { Route, Routes } from "react-router-dom";
import { FilterComponent } from "../Components/Admin/Common";
import { EditMerchant, Merchants, MerchantTransaction } from "../Components/Admin/Merchant";
import AddMerchant from "../Components/Admin/Merchant/AddMerchant";
import CustomerProfile from "../Components/Admin/Profile/CustomerProfile";
import Profile from "../Components/Admin/Profile/Profile";
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
      <Route exact path="/filter-component" element={<FilterComponent />} />
      <Route exact path="/edit-merchant" element={<EditMerchant />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/customer-profile" element={<CustomerProfile />} />
      <Route exact path="/add-merchant" element={<AddMerchant />} />
    </Routes>
  </>
  )
}

export default AdminRoutes