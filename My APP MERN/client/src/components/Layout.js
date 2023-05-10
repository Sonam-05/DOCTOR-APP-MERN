import React from 'react'
// import { adminMenu } from '../Data/data'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Badge } from 'antd';
import './layout.css'

const Layout = ({ children }) => {
    const { user } = useSelector((state) => state.user)
    const location = useLocation();
    const navigate = useNavigate();

    const userMenu = [
        {
            id : 1,
            name : 'Doctor-List',
            path : '/doctor-list',
            icon : "fa-solid fa-notes-medical"
        },
        {
            id : 2,
            name : 'Appointments',
            path : '/appointments',
            icon : "fa-solid fa-list"
        },
        {
            id : 3,
            name : 'Apply-Doctor',
            path : '/apply-doctor',
            icon : "fa-solid fa-user-doctor"
        },
        {
            id : 4,
            name : 'Feedback',
            path : '/feedback',
            icon : "fa-solid fa-comment"
        },
        {
            id : 5,
            name : 'Profile',
            path : `/profile/${user?._id}`,
            icon : "fa-regular fa-address-card"
        },
    ];

    const adminMenu = [
        {
            id : 1,
            name : 'Doctor-List',
            path : '/doctor-list',
            icon : "fa-solid fa-notes-medical"
        },
        {
            id : 2,
            name : 'Users',
            path : '/admin/users',
            icon : "fa-solid fa-user"
        },
        {
            id : 3,
            name : 'Doctors',
            path : '/admin/doctors',
            icon : "fa-solid fa-user-doctor"
        },
        {
            id : 4,
            name : 'Feedback',
            path : '/feedback',
            icon : "fa-solid fa-comment"
        },
        {
            id : 5,
            name : 'Profile',
            path :`/profile/${user?._id}`,
            icon : "fa-regular fa-address-card"
        },
    ];
    

    const doctorMenu = [
        {
            id : 1,
            name : 'Doctor-List',
            path : '/doctor-list',
            icon : "fa-solid fa-notes-medical"
        },
        {
            id : 2,
            name : 'Appointments',
            path : '/appointments',
            icon : "fa-solid fa-list"
        },
        {
            id : 4,
            name : 'Feedback',
            path : '/feedback',
            icon : "fa-solid fa-comment"
        },
        {
            id : 5,
            name : 'Profile',
            path : `/doctor/profile/${user?._id}`,
            icon : "fa-regular fa-address-card"
        },
    ];   
    
    const SidebarMenu = user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu : userMenu

    const hangleLogoutFunc = () => {
        navigate('/')
        localStorage.clear();
    } 

    return (
        <div className='Layout'>
            <section className="main">
                <section className="sidebar">
                    <h4 className="logo">DOC-APP</h4>
                    <hr />
                    <section className="menu">
                        {SidebarMenu.map((singleObj) => {
                            const isActive = location.pathname === singleObj.path
                            return <section className={`sidebarmenuSection ${isActive && "active"}`} key={singleObj.id}>
                                <i className={singleObj.icon}></i>
                                <Link to={singleObj.path}>{singleObj.name}</Link>
                            </section>
                        })}
                        <section className='sidebarmenuSection'>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <Link to='/' onClick={hangleLogoutFunc}>Logout</Link>
                        </section>
                    </section>
                </section>
                <section className="main-content">
                    <section className="main-content-header">
                        <section className='header'>
                            <section className="headerSection">
                                <section className="bagdeSection" style={{ cursor: 'pointer' }} onClick={() => navigate('/notification')}>
                                    <Badge className='badgeIcon' count={user?.notification.length}>
                                        <i className="fa-solid fa-bell"></i>
                                    </Badge>
                                </section>
                                <Link to={`/profile/${user?._id}`}>{user?.username}</Link>
                            </section>
                        </section>
                    </section>
                    <section className="main-content-content">
                        {children}
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Layout
