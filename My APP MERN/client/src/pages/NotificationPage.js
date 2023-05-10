import React from 'react'
import { message, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import axios from 'axios'
import './notification.css'
import {showLoading, hideLoading} from '../redux/features/alertSlice'

const NotificationPage = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const markAllReadFunc = async () => {
        try{
            dispatch(showLoading())
            const res = await axios.post('/api/v1/user/markAllRead', {userId : user._id}, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading())
            if(res.data.success){
                message.success(res.data.message);
            }else{
                message.error(res.data.message)
            }
        }catch(error){
            dispatch(hideLoading())
            console.log(error);
            message.error('Something went wrong')
        }
        window.location.reload();
    }

    const deleteAllReadFunc = async () => {
        try{
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/deleteAllReadNotification', {userId : user._id}, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            })
            dispatch(hideLoading());
            if(res.data.success){
                message.success(res.data.message);
            }else{
                message.error(res.data.message);
            }
        }catch(error){
            dispatch(hideLoading())
            console.log(error)
        }
        window.location.reload();
    }

    const items = [
        {
            key: '1',
            label: `Unread`,
            children: <section>
                <section className="markAllReadSection d-flex justify-content-end m-3">
                    <h5 className="markAllRead text-primary" style={{ cursor: 'pointer' }} onClick={markAllReadFunc}>Mark All Read</h5>
                </section>
                <section className='messages'>
                    {user?.notification.map((singleObj, index) => {
                        return <section key={index} className="notificationSection">
                            <h6 className="notificationSubject">{singleObj.message}</h6>
                        </section>
                    })}
                </section>
            </section>,
        },
        {
            key: '2',
            label: `Read`,
            children: <section>
                <section className="deleteAllReadSection d-flex justify-content-end m-3">
                <h5 onClick={deleteAllReadFunc} className="deleteAllRead text-primary" style={{ cursor: 'pointer' }}>Delete All Read</h5>
            </section>
            <section className='messages'>
                    {user?.seennotification.map((singleObj, index) => {
                        return <section key={index} className="notificationSection">
                            <h6 className="notificationSubject">{singleObj.message}</h6>
                        </section>
                    })}
                </section>
            </section>
            ,
        },
    ];

    return (
        <Layout>
            <h5 className="userProfile">Notifications</h5>
            <Tabs defaultActiveKey="1" items={items} />
        </Layout>
    )
}

export default NotificationPage
