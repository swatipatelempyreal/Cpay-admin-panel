import React from 'react'
import {Link} from 'react-router-dom'

const WalletTransaction = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Wallet Transactions</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active"> Wallet Transactions</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* common component import here */}
                <div className="row">
                    <div className="col-xl-4 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon1.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 25,000</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Total Pending Amount <span>100</span></p>
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
                                        <div className="inovices-amount">AED 1,25,000</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Credit Transactions <span>30</span></p>
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
                                        <div className="inovices-amount">AED 1,50,000</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Debit Transactions <span>70</span></p>
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
                                                        <Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-04.jpg" alt="User Image" /> Barbara Moore</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 30,000</td>
                                                <td>23 Mar 2022</td>
                                                <td><span className="badge bg-danger-light">Debit</span></td>
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
                                                        <Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-06.jpg" alt="User Image" /> Karlene Chaidez</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 70,000</td>
                                                <td>18 Mar 2022</td>
                                                <td><span className="badge bg-danger-light">Debit</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="transaction" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="view-transaction.php" className="invoice-link">IN093439#@14</Link>
                                                </td>
                                                <td> - </td>
                                                <td>27 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/logo-small.png" alt="User Image" /> CPay</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 1,00,000</td>
                                                <td>29 Mar 2022</td>
                                                <td><span className="badge bg-success-light">Credit</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="transaction" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="view-transaction.php" className="invoice-link">IN093439#@11</Link>
                                                </td>
                                                <td>Repairs</td>
                                                <td>28 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-10.jpg" alt="User Image" /> Joseph Collins</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 50,000</td>
                                                <td>1 Apr 2022</td>
                                                <td><span className="badge bg-danger-light">Debit</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="transaction" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="view-transaction.php" className="invoice-link">IN093439#@13</Link>
                                                </td>
                                                <td> - </td>
                                                <td>29 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/logo-small.png" alt="User Image" /> CPay</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 25,000</td>
                                                <td>1 Apr 2022</td>
                                                <td><span className="badge bg-success-light">Credit</span></td>
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

export default WalletTransaction