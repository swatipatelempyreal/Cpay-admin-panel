import { Route, Routes } from "react-router-dom";
import Customer from "../Components/Customer/Customer";
import { AdminLayout } from '../Components/Layout'

const AdminRoutes = () => {
  return (
    
    <>
    <AdminLayout/>
    <Routes>
      <Route exact path="/customer" element={<Customer />} />
    
    </Routes>
  </>
  )
}

export default AdminRoutes