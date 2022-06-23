import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const EditCustomer = () => {

    const [currency, setCurrency] = useState("");
    const [country, setCountry] = useState("");

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const basicInfoSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        name: Yup.string().required("Name is requried"),
        phone: Yup.string().required(phoneRegExp, "Phone is requried"),
        contactname: Yup.string().required("ContactName is requried"),
        website: Yup.string()
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                "Enter correct url!"
            ).required("Please enter website"),
        dropCurrency: Yup.string().required("Please select a currency"),
    // });
    // const billingaddressSchema = Yup.object().shape({
        phone1: Yup.string().required(phoneRegExp, "Phone is requried"),
        city: Yup.string().required("City is requried"),
        state: Yup.string().required("State is requried"),
        address: Yup.string().required("Address is requried"),
        zipcode: Yup.number().required("Zipcode is requried"),
    });

    const basicInitialValues = {
        email: "brianjohnson@example.com",
        name: "Brian Johnson",
        phone: "+1-252-444-7535",
        contactname: "Brian Johnson",
        website: "http://www.example.com/",
        dropCurrency: "USD- US Dollar",
        phone1: "+1-252-444-7535",
        city: "ROME",
        state: "Georgia",
        country: "Afghanistan",
        zipcode: "301614",
        address: "938 Green Acres Road",
    };
    const currencyOptions = [
        { label: "EUR Euro", value: 1 },
        { label: "INR Indoan Rupee", value: 2 },
        { label: "USD- US Dollar", value: 3 },
      ];
      const countryoption = [
        { label: "Afghanistan", value: 1 },
        { label: "Algeria", value: 2 },
        { label: "American Samoa", value: 3 },
        { label: "Andorra", value: 4 },
        { label: "Angola", value: 5 },
        {label : "Anguilla", value : 6},
        {label : "United States", value :7},
      ];

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
                                    initialValues={basicInitialValues}
                                    validationSchema={basicInfoSchema}
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
                                                              <Field
                                                                type="text"
                                                                className={
                                                                    `form-control ${errors.name && touched.name ? "input-error" : null}`
                                                                }
                                                                id="name"
                                                                placeholder="Your Name"
                                                                name="name"
                                                            />
                                                            <ErrorMessage name="name" component="span" className="error " />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                           
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
                                                            
                                                            <Select
                                                                defaultValue={currency}
                                                                options={currencyOptions}
                                                                onChange={(e) => {
                                                                    setCurrency("dropCurrency", e.value);
                                                                }}
                                                                name="dropCurrency"
                                                            />
                                                            <ErrorMessage name="dropCurrency" component="span" className="error"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Primary Contact Name</label>
                                                          
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
                                                           
                                                            <Field
                                                                type="text"
                                                                className={
                                                                    `form-control ${errors.phone && touched.phone ? "input-error" : null}`
                                                                }
                                                                id="phone"
                                                                placeholder="+x(xxx)xxx-xx-xx"
                                                                name='phone'
                                                            />
                                                            <ErrorMessage name="phone" component="span" className="error" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Website</label>
                                                            
                                                            <Field
                                                                type="text"
                                                                className={
                                                                    `form-control ${errors.website && touched.website ? "input-error" : null}`
                                                                }
                                                                placeholder="website"
                                                                name="website"
                                                            />
                                                            <ErrorMessage name="website" component="span" className="error" />
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
                                                                className={
                                                                    `form-control ${errors.city && touched.city ? "input-error" : null}`
                                                                }
                                                                placeholder="City"
                                                                name="city"
                                                            />
                                                            <ErrorMessage name="city" component="span" className="error" />
                                                        </div>
                                                    <div className="form-group">
                                                            <label>Country</label>
                                                            
                                                            <Select
                                                                defaultValue={country}
                                                                options={countryoption}
                                                                onChange={(e) => {
                                                                    setCountry("country", e.value);
                                                                }}
                                                                name="country"
                                                            />
                                                            <ErrorMessage name="country" component="span" className="error"/>
                                                        </div>
                                                       
                                                       
                                                    
                                                    
                                                    <div className="form-group">
                                                            <label>Address</label>
                                                           
                                                            <Field as="textarea" row={5} col={7}
                                                                type="text"
                                                                className={
                                                                    `form-control ${errors.address && touched.address ? "input-error" : null}`
                                                                }
                                                                id="address"
                                                                placeholder="Your address"
                                                                name="address"
                                                            />
                                                            <ErrorMessage name="address" component="span" className="error" />
                                                        </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                            <label>State</label>

                                                            <Field
                                                                type="text"
                                                                className={
                                                                    `form-control ${errors.state && touched.state ? "input-error" : null}`
                                                                }
                                                                placeholder="State"
                                                                name="state"
                                                            />
                                                            <ErrorMessage name="state" component="span" className="error" />
                                                        </div>

                                                    
                                                    
                                                        <div className="form-group">
                                                            <label>Zip Code</label>
                                                           
                                                            <Field
                                                                type="text"
                                                                className={
                                                                    `form-control ${errors.zipcode && touched.zipcode ? "input-error" : null}`
                                                                }
                                                                id="zipcode"
                                                                placeholder="Your zip code"
                                                                name="zipcode"
                                                            />
                                                            <ErrorMessage name="zipcode" component="span" className="error" />
                                                        </div>
                                                    
                                                    <div className="form-group">
                                                            <label>Phone</label>
                                                          
                                                            <Field
                                                                type="text"
                                                                className={
                                                                    `form-control ${errors.phone1 && touched.phone1 ? "input-error" : null}`
                                                                }
                                                                id="phone1"
                                                                placeholder="+x(xxx)xxx-xx-xx"
                                                                
                                                                name='phone1'
                                                            />
                                                            <ErrorMessage name="phone1" component="span" className="error" />
                                                        </div>
                                                 </div>  
                                                </div>
                                                <div className="text-end mt-4">
                                                   
                                                   <button
                                                       type="button"
                                                       className={!isValid ? "disabled-btn  disbtnstl" : "btn btn-primary btnstl"}
                                                       disabled={!isValid}
                                                   >
                                                       Add Customer
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

export default EditCustomer