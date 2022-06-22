import React from 'react'

const MerchantTransaction = () => {
    return (

        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Transactions</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.php">Dashboard</a></li>
                                <li className="breadcrumb-item active">Transactions</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card report-card">
                    <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="transactions-listing">
                                    <li>
                                        <div className="multipleSelection">
                                            <div className="selectBox">
                                                <p className="mb-0"><i data-feather="calendar" className="me-1 select-icon" /> Select Date</p>
                                                <span className="down-icon"><i data-feather="chevron-down" /></span>
                                            </div>
                                            <div id="checkBoxes">
                                                <form action="#">
                                                    <p className="checkbox-title">Date Filter</p>
                                                    <div className="selectBox-cont selectBox-cont-one h-auto">
                                                        <div className="date-picker">
                                                            <div className="form-custom cal-icon">
                                                                <input className="form-control datetimepicker" type="text" placeholder="Form" />
                                                            </div>
                                                        </div>
                                                        <div className="date-picker pe-0">
                                                            <div className="form-custom cal-icon">
                                                                <input className="form-control datetimepicker" type="text" placeholder="To" />
                                                            </div>
                                                        </div>
                                                        <div className="date-list">
                                                            <ul>
                                                                <li><a href="#" className="btn date-btn">Today</a></li>
                                                                <li><a href="#" className="btn date-btn">Yesterday</a></li>
                                                                <li><a href="#" className="btn date-btn">Last 7 days</a></li>
                                                                <li><a href="#" className="btn date-btn">This month</a></li>
                                                                <li><a href="#" className="btn date-btn">Last month</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="multipleSelection">
                                            <div className="selectBox">
                                                <p className="mb-0"><i data-feather="book-open" className="me-1 select-icon" /> Select Status</p>
                                                <span className="down-icon"><i data-feather="chevron-down" /></span>
                                            </div>
                                            <div id="checkBoxes">
                                                <form action="#">
                                                    <p className="checkbox-title">By Status</p>
                                                    <div className="selectBox-cont">
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="name" defaultChecked />
                                                            <span className="checkmark" /> All Transactions
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="name" />
                                                            <span className="checkmark" /> Success
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="name" />
                                                            <span className="checkmark" /> Pending
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="name" />
                                                            <span className="checkmark" /> Failed
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="name" />
                                                            <span className="checkmark" /> Cancelled
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="name" />
                                                            <span className="checkmark" /> Refund
                                                        </label>
                                                    </div>
                                                    <button type="submit" className="btn w-100 btn-primary">Apply</button>
                                                    <button type="reset" className="btn w-100 btn-grey">Reset</button>
                                                </form>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="multipleSelection">
                                            <div className="selectBox">
                                                <p className="mb-0"><i data-feather="bookmark" className="me-1 select-icon" /> By Category</p>
                                                <span className="down-icon"><i data-feather="chevron-down" /></span>
                                            </div>
                                            <div id="checkBoxes">
                                                <form action="#">
                                                    <p className="checkbox-title">Category</p>
                                                    <div className="form-custom">
                                                        <input type="text" className="form-control bg-grey" placeholder="Enter Category Name" />
                                                    </div>
                                                    <div className="selectBox-cont">
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="category" />
                                                            <span className="checkmark" /> Advertising
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="category" />
                                                            <span className="checkmark" /> Food
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="category" />
                                                            <span className="checkmark" /> Marketing
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="category" />
                                                            <span className="checkmark" /> Repairs
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="category" />
                                                            <span className="checkmark" /> Software
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="category" />
                                                            <span className="checkmark" /> Stationary
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="category" />
                                                            <span className="checkmark" /> Travel
                                                        </label>
                                                    </div>
                                                    <button type="submit" className="btn w-100 btn-primary">Apply</button>
                                                    <button type="reset" className="btn w-100 btn-grey">Reset</button>
                                                </form>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="report-btn">
                                            <a href="#" className="btn">
                                                <img src="../inner-assets/img/icons/invoices-icon5.svg" alt className="me-2" /> Generate report
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
                                                    <a href="view-transaction.php" className="invoice-link">IN093439#@09</a>
                                                </td>
                                                <td>Advertising</td>
                                                <td>16 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.php"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-04.jpg" alt="User Image" /> Barbara Moore</a>
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
                                                    <a href="view-transaction.php" className="invoice-link">IN093439#@10</a>
                                                </td>
                                                <td>Food</td>
                                                <td>14 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.php"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-06.jpg" alt="User Image" /> Karlene Chaidez</a>
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
                                                    <a href="view-transaction.php" className="invoice-link">IN093439#@11</a>
                                                </td>
                                                <td>Marketing</td>
                                                <td>7 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.php"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-08.jpg" alt="User Image" /> Russell Copeland</a>
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
                                                    <a href="view-transaction.php" className="invoice-link">IN093439#@12</a>
                                                </td>
                                                <td>Repairs</td>
                                                <td>24 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.php"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-10.jpg" alt="User Image" /> Joseph Collins</a>
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
                                                    <a href="view-transaction.php" className="invoice-link">IN093439#@13</a>
                                                </td>
                                                <td>Software</td>
                                                <td>17 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.php"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-11.jpg" alt="User Image" /> Jennifer Floyd</a>
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