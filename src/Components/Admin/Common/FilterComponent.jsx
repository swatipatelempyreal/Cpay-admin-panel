import React, { Fragment } from 'react'
import { DateRangePickerComponent, StyledMenu } from '../../../Utils';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const UserArr = [
    ' Brian Johnson',
    ' Russell Copeland',
    ' Greg Lynch',
    ' John Blair',
    ' Barbara Moore',
    ' Hendry Evan',
    ' Richard Miles',
];
const statusArr = [
    'All Transactions',
    'Success',
    'Pending',
    'Failed',
    'Cancelled',
    'Refund',
];
const categoryArr = [
    'Advertising',
    'Food',
    'Marketing',
    'Repairs',
    'Software',
    'Stationary',
    'Travel',
];

const CommonMerchant = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [status, setStatus] = React.useState([]);
    const [category, setCategory] = React.useState([]);
    const [user, setUser] = React.useState([]);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangeStatus = (event) => {
        const {
            target: { value },
        } = event;
        setStatus(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeCategory = (event) => {
        const {
            target: { value },
        } = event;
        setCategory(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeUser = (event) => {
        const {
            target: { value },
        } = event;
        setUser(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <div className="card report-card">
            <div className="card-body pb-0">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="transactions-listing">
                            <li>
                                <div className="multipleSelection">
                                    <FormControl sx={{ width: '100%' }}>
                                        <InputLabel id="demo-multiple-checkbox-label"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark me-1 select-icon"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                            Select User</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={user}
                                            onChange={handleChangeUser}
                                            input={<OutlinedInput label={(<><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark me-1 select-icon"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                Select User</>)} />}
                                            renderValue={(selected) => selected.join(', ')}
                                            MenuProps={MenuProps}
                                        >
                                            {UserArr.map((name) => (
                                                <MenuItem key={name} value={name}>
                                                    <Checkbox checked={user.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </li>
                            <li>
                                <div className="multipleSelection">
                                    <div className="selectBox" onClick={handleClick}>
                                        <p className="mb-0"><i data-feather="calendar" className="me-1 select-icon" />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar me-1 select-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                            Select Date</p>
                                        <span className="down-icon"><i data-feather="chevron-down" /></span>
                                    </div>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <DateRangePickerComponent />
                                    </StyledMenu>
                                </div>
                            </li>
                            <li>
                                <div className="multipleSelection">
                                    <FormControl sx={{ width: '100%' }}>
                                        <InputLabel id="demo-multiple-checkbox-label"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open me-1 select-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                            Select Status</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={status}
                                            onChange={handleChangeStatus}
                                            input={<OutlinedInput label={(<><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open me-1 select-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                                Select Status</>)} />}
                                            renderValue={(selected) => selected.join(', ')}
                                            MenuProps={MenuProps}
                                        >
                                            {statusArr.map((name) => (
                                                <MenuItem key={name} value={name}>
                                                    <Checkbox checked={status.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </li>
                            <li>
                                <div className="multipleSelection">
                                    <FormControl sx={{ width: '100%' }}>
                                        <InputLabel id="demo-multiple-checkbox-label"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark me-1 select-icon"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                            By Category</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={category}
                                            onChange={handleChangeCategory}
                                            input={<OutlinedInput label={(<><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark me-1 select-icon"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                By Category</>)} />}
                                            renderValue={(selected) => selected.join(', ')}
                                            MenuProps={MenuProps}
                                        >
                                            {categoryArr.map((name) => (
                                                <MenuItem key={name} value={name}>
                                                    <Checkbox checked={category.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </li>
                            {/* <li>
                <div className="report-btn">
                  <button type="button" className="btn btn-block btn-outline-primary px-4">Submit</button>
                  <button type="button" className="btn btn-block btn-outline-primary px-4">Export</button>
                </div>
              </li> */}
                            <li>
                                <div className="report-btn">
                                    <Link to="#" className="btn">
                                        <img src="../inner-assets/img/icons/invoices-icon5.svg" alt className="me-2" /> Generate report
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonMerchant