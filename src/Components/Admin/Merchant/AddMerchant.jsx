import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const AddMerchant = () => {

    const [currency, setCurrency] = useState("");
    const [country, setCountryopt] = useState("");


    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        name: Yup.string().required("Name is requried"),
        website: Yup.string()
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                "Enter correct url!"
            )
            .required("Please enter website"),
        phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
        dropCurrency: Yup.string().required("Please select a currency"),
        pName: Yup.string().required("Primary-Name is requried"),
   
        state: Yup.string().required("State is required"),
        address: Yup.string().required("Address is requried"),
        city: Yup.string().required("State is required"),
        bphoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
        dropCountry: Yup.string().required("Please select a Country"),
        zipcode: Yup.number().required("zipcode is requried"),
    });

    const initialValues = {
        email: "",
        name: "",
        website: "",
        phoneNumber: "",
        dropCurrency: "",
        pName: "",
   
        state: "",
        address: "",
        city: "",
        bphoneNumber: "",
        dropCountry: "",
        zipcode: "",
    };

    const currencyOptions = [
        { label: "EUR Euro", value: 1 },
        { label: "INR Indoan Rupee", value: 2 },
        { label: "USD- US Dollar", value: 3 },
    ];

    const countryOptions = [
        { label: "Select Country", value: 1 },
        { label: "Afghanistan", value: 2 },
        { label: "Albania", value: 3 },
        { label: "Algeria", value: 4 },
        { label: "American", value: 5 },
        { label: "Andorra", value: 6 },
        { label: "Angola", value: 7 },
        { label: "Anguilla", value: 8 },
        { label: "United States", value: 9 },
    ];

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Merchant</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/Admin/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to="/Admin/Merchants">Merchant</Link></li>
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
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={signInSchema}
                                    validateOnChange
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {(formik) => {
                                        const { errors, touched,isValid, setFieldValue } = formik;
                                        return (
                                            <Form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Name</label>

                                                            <Field
                                                                type="text"
                                                                className={`form-control ${errors.name && touched.name
                                                                        ? "input-error"
                                                                        : null
                                                                    }`}
                                                                name="name"
                                                            />
                                                            <ErrorMessage
                                                                name="name"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email</label>

                                                            <Field
                                                                type="email"
                                                                className={`form-control ${errors.email && touched.email
                                                                        ? "input-error"
                                                                        : null
                                                                    }`}
                                                                name="email"
                                                            />
                                                            <ErrorMessage
                                                                name="email"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Primary Currency</label>
                                                            <Select
                                                                defaultValue={currency}
                                                                options={currencyOptions}
                                                                onChange={(e) => {
                                                                    setFieldValue("dropCurrency", e.value);
                                                                }}
                                                                name="dropCurrency"
                                                            />
                                                            <ErrorMessage
                                                                name="dropCurrency"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Primary Contact Name</label>

                                                            <Field
                                                                type="text"
                                                                className={`form-control ${errors.pName && touched.pName
                                                                        ? "input-error"
                                                                        : null
                                                                    }`}
                                                                name="pName"
                                                            />
                                                        </div>
                                                        <ErrorMessage
                                                            name="pName"
                                                            component="span"
                                                            className="error"
                                                        />
                                                        <div className="form-group">
                                                            <label>Phone</label>

                                                            <Field
                                                                type="text"
                                                                className={`form-control ${errors.phoneNumber && touched.phoneNumber
                                                                        ? "input-error"
                                                                        : null
                                                                    }`}
                                                                name="phoneNumber"
                                                            />
                                                            <ErrorMessage
                                                                name="phoneNumber"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Website</label>

                                                            <Field
                                                                type="text"
                                                                className={`form-control ${errors.website && touched.website
                                                                        ? "input-error"
                                                                        : null
                                                                    }`}
                                                                name="website"
                                                            />
                                                            <ErrorMessage
                                                                name="website"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                        
                                <h4 className="card-title mt-4">Billing Address</h4>

                              
                                                <div className="row">
                                                    <div className="col-md-6">

                                                        <div className="form-group">
                                                            <label>City</label>

                                                            <Field
                                                                type="text"
                                                                className={`form-control ${errors.city && touched.city
                                                                        ? "input-error"
                                                                        : null
                                                                    }`}
                                                                name="city"
                                                            />
                                                            <ErrorMessage
                                                                name="city"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>


                                                        <div className="form-group">
                                                            <label>Country</label>
                                                            <Select
                                                                defaultValue={country}
                                                                options={countryOptions}
                                                                onChange={(e) => {
                                                                    setFieldValue("dropCountry", e.value);
                                                                }}
                                                                name="dropCountry"
                                                            />
                                                            <ErrorMessage
                                                                name="dropCountry"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>


                                                        <div className="form-group">
                                                            <label>Address</label>

                                                            <Field as="textarea" rows={3} cols={5}
                                                                type="text"
                                                                className={`form-control ${errors.address && touched.address
                                                                        ? "input-error"
                                                                        : null
                                                                    }`}
                                                                name="address"
                                                            />
                                                            <ErrorMessage
                                                                name="address"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">

                                                        <div className="form-group">
                                                            <label>State</label>

                                                            <Field
                                                                type="text"
                                                                className={`form-control ${errors.state && touched.state
                                                                        ? "input-error"
                                                                        : null
                                                                    }`}
                                                                name="state"
                                                            />
                                                            <ErrorMessage
                                                                name="state"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>


                                                        <div className="form-group">
                                                            <label>Zip Code</label>

                                                            <Field
                                                                type="number"
                                                                className={`form-control ${errors.zipcode && touched.zipcode
                                                                        ? "input-error"
                                                                        : null
                                                                    }`}
                                                                name="zipcode"
                                                            />
                                                            <ErrorMessage
                                                                name="zipcode"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>


                                                        <div className="form-group">
                                                            <label>Phone</label>

                                                            <Field
                                                                type="text"
                                                                className={`form-control ${errors.bphoneNumber && touched.bphoneNumber
                                                                        ? "input-error"
                                                                        : null
                                                                    }`}
                                                                name="bphoneNumber"
                                                            />
                                                            <ErrorMessage
                                                                name="bphoneNumber"
                                                                component="span"
                                                                className="error"
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="text-end mt-4">
                                                   
                                                   <button
                                                       type="submit"
                                                       className={!isValid ? "disabled-btn disbtnstl" : "btn btn-primary btnstl"}
                                                       disabled={!isValid}
                                                   >
                                                       Add Merchant
                                                   </button>
                                               </div>

                                            </Form>
                                        );
                                    }}
                                </Formik>
                                    
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddMerchant