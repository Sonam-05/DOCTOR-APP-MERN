import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import DoctorList from './doctor/DoctorList';

const Home = () => {
  const [doctors, setDoctors] = useState([]);

  const getAllDoctors = async () => {
    try{
      const res = await axios.get('/api/v1/doctor/getAllDoctors', {
        headers : {
          Authorization : `Bearer ${localStorage.getItem("token")}`
        }
      });
      if(res.data.success){
        setDoctors(res.data.data)
      }
    }catch(error){
      console.log(error)
      message.error('Something went wrong')
    }
  }

  useEffect(() => {
    getAllDoctors();
  }, [])

  return (
    <Layout>
      {doctors && doctors.map((doctor, index) => {
        return <DoctorList key={index} doctor={doctor} />
      })}
    </Layout>
  )
}

export default Home
