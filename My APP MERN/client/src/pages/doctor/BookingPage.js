import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { message, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../../redux/features/alertSlice';

// eslint-disable-next-line
const BookingPage = () => {
    const {user} = useSelector((state) => state.user)
    const [doctor, setDoctor] = useState([]);
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [isAvailable, setIsAvailable] = useState();
    const params = useParams();
    const dispatch = useDispatch();

    const getDoctorById = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/v1/doctor/getDoctorById', { doctorId: params.doctorId }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (res.data.success) {
                setDoctor(res.data.data)
            } else {
                console.log(res.data.message)
            }
        } catch (error) {
            console.log(error);
            message.error('Something went wrong')
        }
    };

    const handleBooking = async () => {
        try{
            dispatch(showLoading())
            const res = await axios.post('/api/v1/user/book-appointment', {
                doctorId : params.doctorId,
                userId : user._id,
                doctorInfo : doctor,
                userInfo : user,
                date : date,
                time : time
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            dispatch(hideLoading())
            if (res.data.success) {
                message.success(res.data.message)
            } else {
                console.log(res.data.message)
            }
        } catch (error) {
            dispatch(hideLoading())
            console.log(error);
            message.error('Something went wrong')
        }
    };

    useEffect(() => {
        getDoctorById()
        // eslint-disable-next-line
    }, [])

    return (
        <Layout>
            <h5 className='userProfile'>Booking Page</h5>
            {doctor && <div className="card text-bg-light">
                <img src="https://t.pimg.jp/009/775/794/1/9775794.jpg" className="card-img" alt='doctor-image' />
                <div className="card-img-overlay">
                    <h5 className="card-title"><strong>Dr. {doctor.firstName} {doctor.lastName}</strong></h5>
                    <p className="card-text">Fees-Per-Consultation : {doctor.consultationFee}</p>
                    {/* <h4>Timings : {doctor.timings[0]} - {doctor.timings[1]}</h4> */}
                    <div className="d-flex flex-column w-50">
                        <DatePicker className='m-2' format="DD-MM-YYYY" onChange={(value) => setDate(moment(value).format("DD-MM-YYYY"))
                        }
                        />
                        <TimePicker className='m-2' format="HH:mm" onChange={(value) => setTime(moment(value).format("HH:mm"))
                        }
                        />
                        <button className='btn btn-primary mt-2'>Check Availability</button>
                        <button className='btn btn-dark mt-2' onClick={handleBooking}>Book Now</button>
                    </div>
                </div>
            </div>}
        </Layout>
    )
}

export default BookingPage
