import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DoctorList from '../../pages/doctor/DoctorList';

const HomepageDoctorList = () => {
    const [doctors, setDoctors] = useState([]);

  const homePageGetAllDoctors = async () => {
    try{
      const res = await axios.get('/api/v1/doctor/homePageGetAllDoctors');
      if(res.data.success){
        setDoctors(res.data.data)
      }
    }catch(error){
      console.log(error)
      message.error('Something went wrong')
    }
  }

  useEffect(() => {
    homePageGetAllDoctors();
  }, [])


  return (
    <div className='HomepageDoctorList' id='homepageDoctorList'>
      {doctors && doctors.map((doctor, index) => {
        return <DoctorList key={index} doctor={doctor} />
      })}
    </div>
  )
}

export default HomepageDoctorList
