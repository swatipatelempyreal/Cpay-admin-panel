import React from 'react'

const AdminHeader = () => {
    return (
        <div>
            <div className="header-left header-left-one">
                <a href="index.php" className="logo">
                    <img src="../inner-assets/img/logo.png" alt="Logo" />
                </a>
                <a href="index.php" className="logo logo-small">
                    <img src="../inner-assets/img/logo-small.png" alt="Logo" width={30} height={30} />
                </a>
            </div>
            <a href="javascript:void(0);" id="toggle_btn">
                <i className="fas fa-bars" />
            </a>
            <a className="mobile_btn" id="mobile_btn">
                <i className="fas fa-bars" />
            </a>
            <ul className="nav nav-tabs user-menu">
                <li className="nav-item dropdown">
                    <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <i data-feather="bell" /> <span className="badge rounded-pill">5</span>
                    </a>
                    <div className="dropdown-menu notifications">
                        <div className="topnav-dropdown-header">
                            <span className="notification-title">Notifications</span>
                            <a href="javascript:void(0)" className="clear-noti"> Clear All</a>
                        </div>
                        <div className="noti-content">
                            <ul className="notification-list">
                                <li className="notification-message">
                                    <a href="activities.php">
                                        <div className="media d-flex">
                                            <span className="avatar avatar-sm">
                                                <img className="avatar-img rounded-circle" alt src="../inner-assets/img/profiles/avatar-02.jpg" />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Brian Johnson</span> paid the invoice <span className="noti-title">#DF65485</span></p>
                                                <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="activities.php">
                                        <div className="media d-flex">
                                            <span className="avatar avatar-sm">
                                                <img className="avatar-img rounded-circle" alt src="../inner-assets/img/profiles/avatar-03.jpg" />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Marie Canales</span> has accepted your estimate <span className="noti-title">#GTR458789</span></p>
                                                <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="activities.php">
                                        <div className="media d-flex">
                                            <div className="avatar avatar-sm">
                                                <span className="avatar-title rounded-circle bg-primary-light"><i className="far fa-user" /></span>
                                            </div>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">New user registered</span></p>
                                                <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="activities.php">
                                        <div className="media d-flex">
                                            <span className="avatar avatar-sm">
                                                <img className="avatar-img rounded-circle" alt src="../inner-assets/img/profiles/avatar-04.jpg" />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Barbara Moore</span> declined the invoice <span className="noti-title">#RDW026896</span></p>
                                                <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="activities.php">
                                        <div className="media d-flex">
                                            <div className="avatar avatar-sm">
                                                <span className="avatar-title rounded-circle bg-info-light"><i className="far fa-comment" /></span>
                                            </div>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">You have received a new message</span></p>
                                                <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="topnav-dropdown-footer">
                            <a href="notifications.php">View all Notifications</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item main-drop">
                    <a className=" nav-link">
                        <span className="user-img">
                            <img src="../inner-assets/img/profiles/avatar-01.jpg" alt />
                            <span className="status online" />
                        </span>
                        <span>Customer Dashboard</span>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default AdminHeader