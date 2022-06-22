import { Route, Routes } from "react-router-dom";
import { FilterComponent } from "../Components/Admin/Common";
import { EditMerchant, Merchants, MerchantTransaction } from "../Components/Admin/Merchant";
import AddMerchant from "../Components/Admin/Merchant/AddMerchant";
import CustomerProfile from "../Components/Admin/Profile/CustomerProfile";
import Profile from "../Components/Admin/Profile/Profile";
import { AdminLayout } from '../Components/Layout'

const AdminRoutes = () => {
  return (
    
    <>
    <AdminLayout/>
    <Routes>
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