import { Route, Routes } from "react-router-dom";
import { Merchants, MerchantTransaction } from "../Components/Admin/Merchant";
import { AdminLayout } from '../Components/Layout'

const AdminRoutes = () => {
  return (
    
    <>
    <AdminLayout/>
    <Routes>
      <Route exact path="/merchants" element={<Merchants />} />
      <Route exact path="/merchant-transactions" element={<MerchantTransaction />} />
    
    </Routes>
  </>
  )
}

export default AdminRoutes