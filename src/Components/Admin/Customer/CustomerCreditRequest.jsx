import React from "react";
import AdminSidebar from "../../Layout/AdminSidebar";
import AdminHeader from "../../Layout/AdminHeader";
import Swal from "sweetalert2";
import { DateRangePickerComponent } from "../../../Utils";
const CustomerCreditRequest = () => {
  alert = () => {
    Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });
  };
  return (
    <div>
      <div className="main-wrapper">
        <div className="header header-one">
          <AdminHeader />
        </div>
        <div className="sidebar" id="sidebar">
          <AdminSidebar />
        </div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Credit Request</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Credit Request</li>
                  </ul>
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
                            <th>Client</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Available Credit</th>
                            <th>Due Date</th>
                            <th>Late Payment Fees</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Alex Campbell</td>
                            <td>7 Jun 2022</td>
                            <td>3000 AED</td>
                            <td>3900 AED</td>
                            <td>17 Jun 2022</td>
                            <td>-</td>
                            <td>
                              <span className="badge bg-success-light">
                                Approved
                              </span>
                            </td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Brian Johnson</td>
                            <td>20 May 2022</td>
                            <td>2000 AED</td>
                            <td>1000 AED</td>
                            <td>1 Jun 2022</td>
                            <td>100 AED</td>
                            <td>
                              <span className="badge bg-primary-light">
                                Pending
                              </span>
                            </td>
                            <td>
                              {/* <a
                                onClick={alert}
                                href="#"
                                className="btn btn-sm btn-white text-success me-2"
                              >
                                Approve
                                                          </a> */}
                              <button className="btn btn-sm btn-white text-success me-2">
                                Approve
                              </button>
                              <button
                                onClick={alert}
                                className="btn btn-sm btn-white text-danger me-2"
                              >
                                Reject
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Jennifer Floyd</td>
                            <td>20 May 2022</td>
                            <td>3000 AED</td>
                            <td>3000 AED</td>
                            <td>25 May 2022</td>
                            <td>-</td>
                            <td>
                              <span className="badge bg-success-light">
                                Approved
                              </span>
                            </td>
                            <td>-</td>
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
      </div>
    </div>
  );
};

export default CustomerCreditRequest;
