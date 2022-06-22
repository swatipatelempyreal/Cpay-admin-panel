import { Route, Routes } from "react-router-dom";
import { AdminLayout } from '../Components/Layout'

const AdminRoutes = () => {
  return (
    
    <>
    <AdminLayout/>
    <Routes>
      {/* <Route exact path="/" element={<Dashboard />} /> */}
    
    </Routes>
  </>
  )
}

export default AdminRoutes