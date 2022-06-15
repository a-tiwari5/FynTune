import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom"



const Sidebar = () => {
    const navigate = useNavigate();


    return (
        <div className='sidebar'>
            <div className="top">
                <span className='logo'>FYNTUNE</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li onClick={() => navigate('/')} >
                        <DashboardIcon className="icon" />
                        <span>Shop List</span>
                    </li>
                    <li onClick={() => navigate('/new')}>
                        <PersonOutlineIcon className="icon" />
                        <span>Add Shop</span>
                    </li>
                    <li>
                        <StoreIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <p className="title">USER</p>

                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar