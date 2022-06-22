import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Customer from "../Components/Customer/Customer";
=======
import { Merchants, MerchantTransaction } from "../Components/Admin/Merchant";
>>>>>>> df426e61553edb50aa135ab44a60842a25214337
import { AdminLayout } from '../Components/Layout'

const AdminRoutes = () => {
  return (
    
    <>
    <AdminLayout/>
    <Routes>
<<<<<<< HEAD
      <Route exact path="/customer" element={<Customer />} />
=======
      <Route exact path="/merchants" element={<Merchants />} />
      <Route exact path="/merchant-transactions" element={<MerchantTransaction />} />
>>>>>>> df426e61553edb50aa135ab44a60842a25214337
    
    </Routes>
  </>
  )
}

export default AdminRoutes