import React from 'react'
import { Link } from 'react-router-dom'
import { FilterComponent } from '../Common'

const MerchantTransaction = () => {
    return (

        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Transactions</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/Admin/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Transactions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <FilterComponent />

                <div className="row">
                    <div className="col-xl-4 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon1.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 1,78,797</div>
                                    </div>
                                </div>
                                <p className="inovices-all">All Transactions <span>50</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon2.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 94,584</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Success Transactions <span>60</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon3.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 3,545</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Pending Transactions <span>70</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon4.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 797</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Failed Transactions <span>80</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon1.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 18,797</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Cancelled Transactions <span>10</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon1.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 797</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Refund Transactions <span>10</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-stripped table-hover datatable">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Transaction ID</th>
                                                <th>Category</th>
                                                <th>Created on</th>
                                                <th>Customer</th>
                                                <th>Amount</th>
                                                <th>Due date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="transaction" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="view-transaction.php" className="invoice-link">IN093439#@09</Link>
                                                </td>
                                                <td>Advertising</td>
                                                <td>16 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/Admin/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-04.jpg" alt="User Image" /> Barbara Moore</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 1,54,220</td>
                                                <td>23 Mar 2022</td>
                                                <td><span className="badge bg-success-light">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="transaction" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="view-transaction.php" className="invoice-link">IN093439#@10</Link>
                                                </td>
                                                <td>Food</td>
                                                <td>14 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/Admin/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-06.jpg" alt="User Image" /> Karlene Chaidez</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 1,222</td>
                                                <td>18 Mar 2022</td>
                                                <td><span className="badge bg-danger-light">Failed</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="transaction" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="view-transaction.php" className="invoice-link">IN093439#@11</Link>
                                                </td>
                                                <td>Marketing</td>
                                                <td>7 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/Admin/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-08.jpg" alt="User Image" /> Russell Copeland</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 3,470</td>
                                                <td>10 Mar 2022</td>
                                                <td><span className="badge bg-primary-light">Cancelled</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="transaction" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="view-transaction.php" className="invoice-link">IN093439#@12</Link>
                                                </td>
                                                <td>Repairs</td>
                                                <td>24 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/Admin/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-10.jpg" alt="User Image" /> Joseph Collins</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 8,265</td>
                                                <td>30 Mar 2022</td>
                                                <td><span className="badge bg-success-light">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="transaction" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="view-transaction.php" className="invoice-link">IN093439#@13</Link>
                                                </td>
                                                <td>Software</td>
                                                <td>17 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/Admin/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-11.jpg" alt="User Image" /> Jennifer Floyd</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 5,200</td>
                                                <td>20 Mar 2022</td>
                                                <td><span className="badge bg-danger-light">Failed</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MerchantTransaction