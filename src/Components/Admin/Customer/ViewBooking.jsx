import React from 'react'

const ViewBooking = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="card invoice-info-card">
                            <div className="card-body">
                                <div className="invoice-item invoice-item-one">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="invoice-logo">
                                                <img src="../inner-assets/img/logo.png" alt="logo" />
                                            </div>
                                            <div className="invoice-head">
                                                <h2>Booking</h2>
                                                <p>Booking Number : In983248782</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="invoice-info">
                                                <strong className="customer-text-one">Booking From</strong>
                                                <h6 className="invoice-name">Company Name</h6>
                                                <p className="invoice-details">
                                                    9087484288 <br />
                                                    Address line 1, Address line 2<br />
                                                    Zip code ,City - Country
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="invoice-item invoice-item-two">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="invoice-info">
                                                <strong className="customer-text-one">Billed to</strong>
                                                <h6 className="invoice-name">Customer Name</h6>
                                                <p className="invoice-details invoice-details-two">
                                                    9087484288 <br />
                                                    Address line 1, <br />
                                                    Address line 2 <br />
                                                    Zip code ,City - Country
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="invoice-info invoice-info2">
                                                <strong className="customer-text-one">Payment Details</strong>
                                                <p className="invoice-details">
                                                    Debit Card <br />
                                                    XXXXXXXXXXXX-2541 <br />
                                                    HDFC Bank
                                                </p>
                                                <div className="invoice-item-box">
                                                    <p>Recurring : 15 Months</p>
                                                    <p className="mb-0">PO Number : 54515454</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="invoice-issues-box">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <div className="invoice-issues-date">
                                                <p>Issue Date : 27 Jul 2022</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="invoice-issues-date">
                                                <p>Due Date : 27 Aug 2022</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="invoice-issues-date">
                                                <p>Due Amount : ₹ 1,54,22 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="invoice-item invoice-table-wrap">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive">
                                                <table className="invoice-table table table-center mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Description</th>
                                                            <th>Category</th>
                                                            <th>Rate/Item</th>
                                                            <th>Quantity</th>
                                                            <th>Discount (%)</th>
                                                            <th className="text-end">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Pride Hotel</td>
                                                            <td>3 Days</td>
                                                            <td>AED 1,110</td>
                                                            <th>2</th>
                                                            <th>2%</th>
                                                            <td className="text-end">AED 400</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Package</td>
                                                            <td>3 Days</td>
                                                            <td>AED 1,500</td>
                                                            <th>3</th>
                                                            <th>6%</th>
                                                            <td className="text-end">AED 3,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Extra Activities</td>
                                                            <td>1 Day</td>
                                                            <td>AED 11,500</td>
                                                            <th>1</th>
                                                            <th>10%</th>
                                                            <td className="text-end">AED 11,000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="invoice-terms">
                                            <h6>Notes:</h6>
                                            <p className="mb-0">Enter customer notes or any other details</p>
                                        </div>
                                        <div className="invoice-terms">
                                            <h6>Terms and Conditions:</h6>
                                            <p className="mb-0">Enter customer notes or any other details</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="invoice-total-card">
                                            <div className="invoice-total-box">
                                                <div className="invoice-total-inner">
                                                    <p>Taxable <span>AED 6,660.00</span></p>
                                                    <p>Additional Charges <span>AED 6,660.00</span></p>
                                                    <p>Discount <span>AED 3,300.00</span></p>
                                                    <p className="mb-0">Sub total <span>AED 3,300.00</span></p>
                                                </div>
                                                <div className="invoice-total-footer">
                                                    <h4>Total Amount <span>AED 143,300.00</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="invoice-sign text-end">
                                    <img className="img-fluid d-inline-block" src="../inner-assets/img/signature.png" alt="sign" />
                                    <span className="d-block">Cpay Mechant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewBooking