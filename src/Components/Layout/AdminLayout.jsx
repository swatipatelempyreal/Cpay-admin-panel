import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

const AdminLayout = () => {
  return (
    
    <>
    <div className="header header-one">
      <AdminHeader />
    </div>
    <div className="sidebar" id="sidebar">
      <AdminSidebar />
    </div>
  </>
  )
}

export default AdminLayout