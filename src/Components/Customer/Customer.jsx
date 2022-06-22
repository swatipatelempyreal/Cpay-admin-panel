import React from 'react'

const Customer = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Customers</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.php">Dashboard</a></li>
                                <li className="breadcrumb-item active">Customers</li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <a href="add-customer.php" className="btn btn-primary me-1">
                                <i className="fas fa-plus" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card report-card">
                    <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="app-listing">
                                    <li>
                                        <div className="multipleSelection">
                                            <div className="selectBox">
                                                <p className="mb-0"><i data-feather="user-plus" className="me-1 select-icon" /> Select User</p>
                                                <span className="down-icon"><i data-feather="chevron-down" /></span>
                                            </div>
                                            <div id="checkBoxes">
                                                <form action="#">
                                                    <p className="checkbox-title">Customer Search</p>
                                                    <div className="form-custom">
                                                        <input type="text" className="form-control bg-grey" placeholder="Enter Customer Name" />
                                                    </div>
                                                    <div className="selectBox-cont">
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="username" />
                                                            <span className="checkmark" /> Brian Johnson
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="username" />
                                                            <span className="checkmark" /> Russell Copeland
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="username" />
                                                            <span className="checkmark" /> Greg Lynch
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="username" />
                                                            <span className="checkmark" /> John Blair
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="username" />
                                                            <span className="checkmark" /> Barbara Moore
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="username" />
                                                            <span className="checkmark" /> Hendry Evan
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="username" />
                                                            <span className="checkmark" /> Richard Miles
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
                                                            <span className="checkmark" /> All Users
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="name" />
                                                            <span className="checkmark" /> Active
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="name" />
                                                            <span className="checkmark" /> In Active
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
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-center table-hover datatable">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Customer</th>
                                                <th>Email</th>
                                                <th>Amount Due</th>
                                                <th>Registered On</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-02.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Brian Johnson <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 295</td>
                                                <td>16 Nov 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-03.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Marie Canales <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 1750</td>
                                                <td>8 Nov 2020</td>
                                                <td><span className="badge badge-pill bg-danger-light">Inactive</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-04.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Barbara Moore <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 8295</td>
                                                <td>24 Oct 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-05.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Greg Lynch <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 3000</td>
                                                <td>11 Oct 2020</td>
                                                <td><span className="badge badge-pill bg-danger-light">Inactive</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-06.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Karlene Chaidez <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>-</td>
                                                <td>29 Sep 2020</td>
                                                <td><span className="badge badge-pill bg-danger-light">Inactive</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-07.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">John Blair <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 50</td>
                                                <td>13 Aug 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-08.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Russell Copeland <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>-</td>
                                                <td>2 Jul 2020</td>
                                                <td><span className="badge badge-pill bg-danger-light">Inactive</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-09.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Leatha Bailey <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 480</td>
                                                <td>20 Jun 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-10.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Joseph Collins <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 600</td>
                                                <td>9 May 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-11.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Jennifer Floyd <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>-</td>
                                                <td>17 Apr 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-12.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Alex Campbell <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>-</td>
                                                <td>30 Mar 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="customer-profile.php" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-13.jpg" alt="User Image" /></a>
                                                        <a href="customer-profile.php">Wendell Ward <span>9876543210</span></a>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 7500</td>
                                                <td>22 Feb 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <a href="edit-customer.php" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</a>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</a>
                                                </td>
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

export default Customer
