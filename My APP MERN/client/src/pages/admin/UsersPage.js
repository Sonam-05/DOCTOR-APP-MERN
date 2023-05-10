import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { Table, message } from 'antd';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const getAllUsersFunc = async () => {
        try {
            const res = await axios.post('/api/v1/admin/getAllUsers', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (res.data.success) {
                // message.success(res.data.message);
                setUsers(res.data.data)
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllUsersFunc();
    },[])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Doctor',
            dataIndex: 'isDoctor',
            render : (text, record) => (
                <span>{record.isDoctor ? 'Yes' : 'No'}</span>
            )
        },
        // {
        //     title: 'Actions',
        //     dataIndex: 'actions',
        //     render: (text, record) => (
        //         <section className='d-flex text-center'>
        //             <button className='btn btn-danger'>Block</button>
        //         </section>
        //     ),
        // },
    ]


    return (
        <Layout>
            <h5 className="userProfile">Users Data</h5>
            <Table dataSource={users} columns={columns} />
        </Layout>
    )
}

export default UsersPage
