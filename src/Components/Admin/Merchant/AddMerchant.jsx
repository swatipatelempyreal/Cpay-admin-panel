import React from 'react'
import { Link } from 'react-router-dom';

const AddMerchant = () => {
    return (

        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Merchant</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to="/Merchants">Merchant</Link></li>
                                <li className="breadcrumb-item active">Add Merchant</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic Info</h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Primary Currency</label>
                                                <select className="select">
                                                    <option>Select Currency</option>
                                                    <option>EUR Euro</option>
                                                    <option>INR Indoan Rupee</option>
                                                    <option>USD- US Dollar</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Primary Contact Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Website</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <h4 className="card-title mt-4">Billing Address</h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>State</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea rows={5} cols={5} className="form-control" placeholder="Enter Address" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select className="select">
                                                    <option>Select Country</option>
                                                    <option>Afghanistan</option>
                                                    <option>Afghanistan</option>
                                                    <option>Albania</option>
                                                    <option>Algeria</option>
                                                    <option>American Samoa</option>
                                                    <option>Andorra</option>
                                                    <option>Angola</option>
                                                    <option>Anguilla</option>
                                                    <option selected>United States</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>City</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Zip Code</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <h4 className="card-title mt-4">Shipping Address</h4>
                                <form action="#">
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-outline-primary btn-sm">Copy from Billing</button>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>State:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Address:</label>
                                                <textarea rows={5} cols={5} className="form-control" placeholder="Enter Address" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Country:</label>
                                                <select className="select">
                                                    <option>Select Country</option>
                                                    <option value="Afganistan">Afghanistan</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American Samoa">American Samoa</option>
                                                    <option value="Andorra">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Anguilla">Anguilla</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>City:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Zip Code:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end mt-4">
                                        <button type="submit" className="btn btn-primary">Add Customer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddMerchant