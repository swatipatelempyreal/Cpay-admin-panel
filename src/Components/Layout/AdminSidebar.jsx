import React , { useState } from 'react'
import { NavLink , Link  } from 'react-router-dom'

const AdminSidebar = () => {

    const [hideShow, setHideShow] = useState('none');
    const [customerhideShow, setCustomerHideShow] = useState('none');

    return (
        <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                    <li className="menu-title"><span>Main</span></li>
                    <li className="active">
                        <a href="index.php"><i data-feather="home" /> <span>Dashboard</span></a>
                    </li>

                    <li className="submenu" onClick={() => {
                        setHideShow((hideShow == 'none' ? 'block' : 'none'))
                    }}>
                        <a href="#">
                            <i data-feather="clipboard" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <span> Merchant</span> <span className="menu-arrow" />
                        </a>
                        <ul style={{ display: hideShow }}>
                            <li><NavLink to="/merchants">Merchants</NavLink></li>
                            <li><NavLink to="/merchant-transactions">Merchant Transactions List</NavLink></li>
                        </ul>
                    </li>
                    
                    <li className="submenu" onClick={() => {
                        setCustomerHideShow((customerhideShow == 'none' ? 'block' : 'none'))
                    }}>
                        <a href="#">
                            <i data-feather="clipboard" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            <span> Customer</span> <span className="menu-arrow" />
                        </a>
                        <ul style={{ display: customerhideShow }}>
                            <li><NavLink to="/customer">Customers</NavLink></li>
                            <li><NavLink to="/customer-booking">Customer Booking List</NavLink></li>
                            <li><NavLink to="/customer-booking-details">Customer Booking Details</NavLink></li>
                            <li><NavLink to="/customer-wallet">Customer Wallet</NavLink></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><i data-feather="pie-chart" /> <span> Reports</span> <span className="menu-arrow" /></a>
                        <ul>
                            <li><a href="wallet-transactions.php">Wallet Report</a></li>
                            <li><a href="transactions.php">Pending Amount Report</a></li>
                            <li><a href="transactions.php">View Earning Report</a></li>
                            <li><a href="transactions.php">Customer transaction Report</a></li>
                            <li><a href="transactions.php">Customer Amount Due Report</a></li>
                            <li><a href="transactions.php">Merchant Transaction Report</a></li>
                            <li><a href="transactions.php">Merchant Amount Due Report</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><i data-feather="edit" /> <span> Merchant API </span> <span className="menu-arrow" /></a>
                        <ul>
                            <li><a href="merchant-api.php">Merchant API Keys</a></li>
                            <li><a href="developer-documentation.php">API Documentation</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/profile"><i data-feather="user" /> <span>Profile</span></Link>
                    </li>
                    <li>
                        <a href="settings.php"><i data-feather="settings" /> <span>Settings</span></a>
                    </li>
                    <li>
                        <a href="#"><i data-feather="log-out" /> <span>Logout</span></a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default AdminSidebar