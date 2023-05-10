import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import {showLoading, hideLoading} from '../../redux/features/alertSlice'
import { Table, message } from 'antd'
import { useDispatch } from 'react-redux'

const DoctorsPage = () => {
    const dispatch = useDispatch();
    const [doctors, setDoctors] = useState([]);

    const getAllDoctorsFunc = async() => {
        try{
            // dispatch(showLoading());
            const res = await axios.post('/api/v1/admin/getAllDoctors', {}, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            })
            // dispatch(hideLoading())
            if(res.data.success){
                // message.success(res.data.message);
                setDoctors(res.data.data);
            }
        }catch(error){
            // dispatch(hideLoading())
            console.log(error);
            message.error('Something went wrong');
        }
    }

    useEffect(() => {
        getAllDoctorsFunc();
    }, [])

    const approveDoctorFunc = async (record, status) => {
        try{
            dispatch(showLoading())
            const res = await axios.post('/api/v1/admin/approveDoctor', {doctorId : record._id, status : status}, {
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
    }

    

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render : (text, record) => (
            <section>
                <p>{`${record.firstName} ${record.lastName}`}</p>
            </section>
          )
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Contact',
          dataIndex: 'contact',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render : (text, record) => (
                <section className='d-flex'>
                    {record.status === "pending" ? <button className='btn btn-success' onClick={() => {approveDoctorFunc(record, 'approve')}}>Approve</button> : <button className='btn btn-danger'>Reject</button>}
                </section>
            )
        },
      ];

  return (
    <Layout>
         <h5 className="userProfile">Doctors List</h5>
        <Table dataSource={doctors} columns={columns} />
    </Layout>
  )
}

export default DoctorsPage
