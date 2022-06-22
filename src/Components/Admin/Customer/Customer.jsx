import React from 'react'
import {Link} from 'react-router-dom'
import {FilterComponent} from '../Common'

const Customer = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Customers</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Customers</li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <Link to="/add-customer" className="btn btn-primary me-1">
                                <i className="fas fa-plus" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* common filter import here */}
                   <FilterComponent /> 
               
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
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-02.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Brian Johnson <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 295</td>
                                                <td>16 Nov 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-03.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Marie Canales <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 1750</td>
                                                <td>8 Nov 2020</td>
                                                <td><span className="badge badge-pill bg-danger-light">Inactive</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-04.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Barbara Moore <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 8295</td>
                                                <td>24 Oct 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-05.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Greg Lynch <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 3000</td>
                                                <td>11 Oct 2020</td>
                                                <td><span className="badge badge-pill bg-danger-light">Inactive</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-06.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Karlene Chaidez <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>-</td>
                                                <td>29 Sep 2020</td>
                                                <td><span className="badge badge-pill bg-danger-light">Inactive</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-07.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">John Blair <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 50</td>
                                                <td>13 Aug 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-08.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Russell Copeland <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>-</td>
                                                <td>2 Jul 2020</td>
                                                <td><span className="badge badge-pill bg-danger-light">Inactive</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-09.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Leatha Bailey <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 480</td>
                                                <td>20 Jun 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-10.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Joseph Collins <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 600</td>
                                                <td>9 May 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-11.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Jennifer Floyd <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>-</td>
                                                <td>17 Apr 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-12.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Alex Campbell <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>-</td>
                                                <td>30 Mar 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <Link to="/customer-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="../inner-assets/img/profiles/avatar-13.jpg" alt="User Image" /></Link>
                                                        <Link to="/customer-profile">Wendell Ward <span>9876543210</span></Link>
                                                    </h2>
                                                </td>
                                                <td>example@gmail.com</td>
                                                <td>AED 7500</td>
                                                <td>22 Feb 2020</td>
                                                <td><span className="badge badge-pill bg-success-light">Active</span></td>
                                                <td className="text-end">
                                                    <Link to="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1" /> Edit</Link>
                                                    <Link to="/" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1" />Delete</Link>
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
