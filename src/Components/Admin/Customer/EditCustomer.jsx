import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditCustomer = () => {

    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        name: Yup.string().required("Name is requried"),
        phone: Yup.string().required("Phone is requried"),
        city: Yup.string().required("City is requried"),
        country: Yup.string().required("Country is requried"),
        state: Yup.string().required("State is requried"),
        address1: Yup.string().required("Address is requried"),
        zipcode: Yup.number().required("Zipcode is requried"),
    });

    const initialValues = {
        email: "",
        name: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        address1: "",
    };

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Customers</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to="/admin/customer">Customers</Link></li>
                                <li className="breadcrumb-item active">Edit Customers</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic Info</h4>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={signInSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {(formik) => {
                                        const { errors, touched, isValid, dirty } = formik;
                                        return (
                                            <Form>
                                                <div className="row">
                                                    <div className="col-md-6">

                                                        <div className="form-group">
                                                            <label>Display Name</label>
                                                            {/* <input type="text" className="form-control" defaultValue="Brian Johnson" /> */}
                                                            <Field
                                                                type="text"
                                                                className={
                                                                    `form-control ${errors.name && touched.name ? "input-error" : null}`
                                                                }
                                                                id="name"
                                                                placeholder="Your Name"
                                                                name="name"
                                                            />
                                                            <ErrorMessage name="name" component="span" className="error" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            {/* <input type="email" className="form-control" defaultValue="brianjohnson@example.com" /> */}
                                                            <Field
                                                                type="email"
                                                                className={
                                                                    `form-control ${errors.email && touched.email ? "input-error" : null}`
                                                                }
                                                                id="email"
                                                                placeholder="Email"
                                                                name="email"
                                                            />
                                                            <ErrorMessage name="email" component="span" className="error" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Primary Currency</label>
                                                            <select className="select">
                                                                <option selected>USD- US Dollar</option>
                                                                <option>EUR Euro</option>
                                                                <option>INR Indoan Rupee</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Primary Contact Name</label>
                                                            {/* <input type="text" className="form-control" defaultValue="Brian Johnson" /> */}
                                                            <Field
                                                                type="text"
                                                                className={
                                                                    `form-control ${errors.contactname && touched.contactname ? "input-error" : null}`
                                                                }
                                                                id="contactname"
                                                                placeholder="Primary Contact Name"
                                                                name="contactname"
                                                            />
                                                            <ErrorMessage name="contactname" component="span" className="error" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Phone</label>
                                                            {/* <input type="text" className="form-control" defaultValue="+1-252-444-7535" /> */}
                                                            <Field
                                                                type="text"
                                                                className={
                                                                    `form-control ${errors.phone && touched.phone ? "input-error" : null}`
                                                                  }
                                                                id="phone"
                                                                placeholder="+x(xxx)xxx-xx-xx"
                                                                name='7878787898'
                                                            />
                                                            <ErrorMessage name="phone" component="span" className="error" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Website</label>
                                                            <input type="text" className="form-control" defaultValue="http://www.example.com/" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        );
                                    }}
                                </Formik>
                                <h4 className="card-title mt-4">Billing Address</h4>
                                <Form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" defaultValue="Brian Johnson" />
                                            </div>
                                            <div className="form-group">
                                                <label>State</label>
                                                <input type="text" className="form-control" defaultValue="Georgia" />
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea rows={5} cols={5} className="form-control" placeholder="938 Green Acres Road" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select className="select">
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
                                                <input type="text" className="form-control" defaultValue="ROME" />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type="text" className="form-control" defaultValue="+1-252-444-7535" />
                                            </div>
                                            <div className="form-group">
                                                <label>Zip Code</label>
                                                <input type="text" className="form-control" defaultValue={30161} />
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                                <h4 className="card-title mt-4">Shipping Address</h4>
                                <Form>
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-outline-primary btn-sm">Copy from Billing</button>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" defaultValue="Brian Johnson" />
                                            </div>
                                            <div className="form-group">
                                                <label>State</label>
                                                <input type="text" className="form-control" defaultValue="Georgia" />
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea rows={5} cols={5} className="form-control" placeholder="938 Green Acres Road" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select className="select">
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
                                                <input type="text" className="form-control" defaultValue="ROME" />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type="text" className="form-control" defaultValue="+1-252-444-7535" />
                                            </div>
                                            <div className="form-group">
                                                <label>Zip Code:</label>
                                                <input type="text" className="form-control" defaultValue={30161} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end mt-4">
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditCustomer