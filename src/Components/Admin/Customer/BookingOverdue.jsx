import React from 'react'
import {Link} from 'react-router-dom'

const BookingOverdue = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Bookings</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Bookings</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Common component import here */}
                <div className="card invoices-tabs-card">
                    <div className="card-body card-body pt-0 pb-0">
                        <div className="invoices-main-tabs">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-8">
                                    <div className="invoices-tabs">
                                        <ul>
                                            <li><Link to="/customer-booking-list">All Bookings</Link></li>
                                            <li><Link to="/booking-paid">Paid</Link></li>
                                            <li><Link to="/booking-overdue" className="active">Overdue</Link></li>
                                            <li><Link to="/booking-cancelled">Cancelled</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon1.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 8,78,797</div>
                                    </div>
                                </div>
                                <p className="inovices-all">All Bookings <span>50</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon2.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 4,5884</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Paid Bookings <span>60</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon3.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 2,05,545</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Unpaid Bookings <span>70</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card inovices-card">
                            <div className="card-body">
                                <div className="inovices-widget-header">
                                    <span className="inovices-widget-icon">
                                        <img src="../inner-assets/img/icons/invoices-icon4.svg" alt />
                                    </span>
                                    <div className="inovices-dash-count">
                                        <div className="inovices-amount">AED 8,8,797</div>
                                    </div>
                                </div>
                                <p className="inovices-all">Cancelled Bookings <span>80</span></p>
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
                                                <th>Booking ID</th>
                                                <th>Category</th>
                                                <th>Created on</th>
                                                <th>Customer</th>
                                                <th>Amount</th>
                                                <th>Due date</th>
                                                <th>Status</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="Booking" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="/view-booking" className="invoice-link">IN093439#@09</Link>
                                                </td>
                                                <td>Advertising</td>
                                                <td>16 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-04.jpg" alt="User Image" /> Barbara Moore</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 1,54,220</td>
                                                <td>23 Mar 2022</td>
                                                <td><span className="badge bg-danger-light">Overdue 1 days</span></td>
                                                <td className="text-end">
                                                    <div className="dropdown dropdown-action">
                                                        <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link className="dropdown-item" to="edit-booking.php"><i className="far fa-edit me-2" />Edit</Link>
                                                            <Link className="dropdown-item" to="/view-booking"><i className="far fa-eye me-2" />View</Link>
                                                            <Link className="dropdown-item" to="/"><i className="far fa-trash-alt me-2" />Delete</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="Booking" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="/view-booking" className="invoice-link">IN093439#@10</Link>
                                                </td>
                                                <td>Food</td>
                                                <td>14 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-06.jpg" alt="User Image" /> Karlene Chaidez</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 1,222</td>
                                                <td>18 Mar 2022</td>
                                                <td><span className="badge bg-danger-light">Overdue 3 days</span></td>
                                                <td className="text-end">
                                                    <div className="dropdown dropdown-action">
                                                        <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link className="dropdown-item" to="edit-booking.php"><i className="far fa-edit me-2" />Edit</Link>
                                                            <Link className="dropdown-item" to="/view-booking"><i className="far fa-eye me-2" />View</Link>
                                                            <Link className="dropdown-item" to="/"><i className="far fa-trash-alt me-2" />Delete</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="Booking" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="/view-booking" className="invoice-link">IN093439#@11</Link>
                                                </td>
                                                <td>Marketing</td>
                                                <td>7 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-08.jpg" alt="User Image" /> Russell Copeland</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 3,470</td>
                                                <td>10 Mar 2022</td>
                                                <td><span className="badge bg-danger-light">Overdue 10 days</span></td>
                                                <td className="text-end">
                                                    <div className="dropdown dropdown-action">
                                                        <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link className="dropdown-item" to="edit-booking.php"><i className="far fa-edit me-2" />Edit</Link>
                                                            <Link className="dropdown-item" to="/view-booking"><i className="far fa-eye me-2" />View</Link>
                                                            <Link className="dropdown-item" to="/"><i className="far fa-trash-alt me-2" />Delete</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="Booking" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="/view-booking" className="invoice-link">IN093439#@12</Link>
                                                </td>
                                                <td>Repairs</td>
                                                <td>24 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-10.jpg" alt="User Image" /> Joseph Collins</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 8,265</td>
                                                <td>30 Mar 2022</td>
                                                <td><span className="badge bg-danger-light">Overdue 7 days</span></td>
                                                <td className="text-end">
                                                    <div className="dropdown dropdown-action">
                                                        <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link className="dropdown-item" to="edit-booking.php"><i className="far fa-edit me-2" />Edit</Link>
                                                            <Link className="dropdown-item" to="/view-booking"><i className="far fa-eye me-2" />View</Link>
                                                            <Link className="dropdown-item" to="/"><i className="far fa-trash-alt me-2" />Delete</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="Booking" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <Link to="/view-booking" className="invoice-link">IN093439#@13</Link>
                                                </td>
                                                <td>Software</td>
                                                <td>17 Mar 2022</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-11.jpg" alt="User Image" /> Jennifer Floyd</Link>
                                                    </h2>
                                                </td>
                                                <td className="text-primary">AED 5,200</td>
                                                <td>20 Mar 2022</td>
                                                <td><span className="badge bg-danger-light">Overdue 5 days</span></td>
                                                <td className="text-end">
                                                    <div className="dropdown dropdown-action">
                                                        <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link className="dropdown-item" to="edit-booking.php"><i className="far fa-edit me-2" />Edit</Link>
                                                            <Link className="dropdown-item" to="/view-booking"><i className="far fa-eye me-2" />View</Link>
                                                            <Link className="dropdown-item" to="/"><i className="far fa-trash-alt me-2" />Delete</Link>
                                                        </div>
                                                    </div>
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

export default BookingOverdue