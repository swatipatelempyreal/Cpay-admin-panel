import React from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="row justify-content-lg-center">
                    <div className="col-lg-10">
                        <div className="page-header">
                            <div className="row">
                                <div className="col">
                                    <h3 className="page-title">Profile</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                        <li className="breadcrumb-item active">Profile</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="profile-cover">
                            <div className="profile-cover-wrap">
                                <img className="profile-cover-img" src="../inner-assets/img/profiles/avatar-02.jpg" alt="Profile Cover" />
                                <div className="cover-content">
                                    <div className="custom-file-btn">
                                        <input type="file" className="custom-file-btn-input" id="cover_upload" />
                                        <label className="custom-file-btn-label btn btn-sm btn-white" htmlFor="cover_upload">
                                            <i className="fas fa-camera" />
                                            <span className="d-none d-sm-inline-block ms-1">Update Cover</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mb-5">
                            <label className="avatar avatar-xxl profile-cover-avatar" htmlFor="avatar_upload">
                                <img className="avatar-img" src="../inner-assets/img/profiles/avatar-02.jpg" alt="Profile Image" />
                                <input type="file" id="avatar_upload" />
                                <span className="avatar-edit">
                                    <i data-feather="edit-2" className="avatar-uploader-icon shadow-soft" />
                                </span>
                            </label>
                            <h2>Charles Hafner <i className="fas fa-certificate text-primary small" data-toggle="tooltip" data-placement="top" title data-original-title="Verified" /></h2>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <i className="far fa-building" /> <span>Hafner Pvt Ltd.</span>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fas fa-map-marker-alt" /> West Virginia, US
                                </li>
                                <li className="list-inline-item">
                                    <i className="far fa-calendar-alt" /> <span>Joined November 2017</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title d-flex justify-content-between">
                                            <span>Profile</span>
                                            <a className="btn btn-sm btn-white" href="settings.php">Edit</a>
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-0">
                                                <small className="text-dark">About</small>
                                            </li>
                                            <li>
                                                Charles Hafner
                                            </li>
                                            <li>
                                                Hafner Pvt Ltd.
                                            </li>
                                            <li className="pt-2 pb-0">
                                                <small className="text-dark">Contacts</small>
                                            </li>
                                            <li>
                                                Example@gmail.com
                                            </li>
                                            <li>
                                                +1 (304) 499-13-66
                                            </li>
                                            <li className="pt-2 pb-0">
                                                <small className="text-dark">Address</small>
                                            </li>
                                            <li>
                                                4663 Agriculture Lane,<br />
                                                Miami,<br />
                                                Florida - 33165,<br />
                                                United States.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Activity</h5>
                                    </div>
                                    <div className="card-body card-body-height">
                                        <ul className="activity-feed">
                                            <li className="feed-item">
                                                <div className="feed-date">Nov 16</div>
                                                <span className="feed-text"><a href="profile.php">Brian Johnson</a> has paid the invoice <a href="view-invoice.php">"#DF65485"</a></span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">Nov 7</div>
                                                <span className="feed-text"><a href="profile.php">Marie Canales</a> has accepted your estimate <a href="view-estimate.php">#GTR458789</a></span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">Oct 24</div>
                                                <span className="feed-text">New expenses added <a href="expenses.php">"#TR018756</a></span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">Oct 24</div>
                                                <span className="feed-text">New expenses added <a href="expenses.php">"#TR018756</a></span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">Oct 24</div>
                                                <span className="feed-text">New expenses added <a href="expenses.php">"#TR018756</a></span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">Oct 24</div>
                                                <span className="feed-text">New expenses added <a href="expenses.php">"#TR018756</a></span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">Oct 24</div>
                                                <span className="feed-text">New expenses added <a href="expenses.php">"#TR018756</a></span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">Jan 27</div>
                                                <span className="feed-text"><a href="profile.php">Robert Martin</a> gave a review for <a href="product-details.php">"Dell Laptop"</a></span>
                                            </li>
                                            <li className="feed-item">
                                                <div className="feed-date">Jan 14</div>
                                                <span className="feed-text">New customer registered <a href="profile.php">"Tori Carter"</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile