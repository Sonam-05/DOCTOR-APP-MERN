import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/Layout'
import { Col, Form, Input, message, Row, TimePicker } from 'antd';
import { hideLoading, showLoading } from '../../redux/features/alertSlice';
import moment from 'moment';

const DoctorProfile = () => {
    const {user}  = useSelector((state) => state.user);
    const [doctor, setDoctor] = useState(null);
    const params = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log(values);
        try{
            dispatch(showLoading())
            const res = await axios.post('/api/v1/doctor/updateDoctorProfile', {...values, userId : user._id, timings : [
                moment(values.timings[0]).format('HH:mm'),
                moment(values.timings[1]).format('HH:mm')
            ]}, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            })
            dispatch(hideLoading())
            if(res.data.success){
                navigate('/')
                message.success(res.data.message);
            }else{
                message.error(res.data.message);
            }
        }catch(error){
            dispatch(hideLoading())
            message.error('Something went wrong')
            console.log(error);
        }
    };

    const getDoctorInfo = async () => {
        try{
            const res = await axios.post('/api/v1/doctor/getDoctorInfo', {userId : params.id}, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            })
            if(res.data.success){
                setDoctor(res.data.data)
            }
        }catch(error){
            console.log(error);
            message.error('Something went wrong');
        }
    }

    useEffect(() => {
        getDoctorInfo();
    }, [])

  return (
    <Layout>
      <h5 className='userProfile'>Manage Profile</h5>
      {doctor && (<Form onFinish={onFinish} initialValues={{...doctor, timings : [
                moment(doctor.timings[0], 'HH:mm'),
                moment(doctor.timings[1], 'HH:mm')
            ]}} >  
                <fieldset>
                    <legend>Personal Details :</legend>
                    <Row gutter={20}>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label='First Name' name="firstName" rules={[{ required: true, message: 'Please input your first name!', },]}>
                                <Input placeholder='Enter Your First Name' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label='Last Name' name="lastName" rules={[{ required: true, message: 'Please input your last name!', },]}>
                                <Input placeholder='Enter Your Last Name' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label='Email' name="email" rules={[{ required: true, message: 'Please input your email id!', },]}>
                                <Input placeholder='Enter Your Email Id' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label='Contact' name="contact" rules={[{ required: true, message: 'Please input your contact number!', },]}>
                                <Input placeholder='Enter Your Contact Number' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label='Address' name="address" rules={[{ required: true, message: 'Please input your address!', },]}>
                                <Input placeholder='Enter Your Address' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label='Website' name="website" rules={[{ required: true, message: 'Please input your website link!', },]}>
                                <Input placeholder='Enter Your website link' />
                            </Form.Item>
                        </Col>
                    </Row>
                </fieldset>

                <fieldset>
                    <legend>Professional Details :</legend>
                    <Row gutter={20}>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label='Specialization' name="specialization" rules={[{ required: true, message: 'Please input your specialization!', },]}>
                                <Input placeholder='Enter Your Specialization' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label='Experience' name="experience" rules={[{ required: true, message: 'Please input your year of experience!', },]}>
                                <Input placeholder='Enter Your Year Of Experience' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label='Consultation Fee' name="consultationFee" rules={[{ required: true, message: 'Please input your Fee-Per-Consultation!', },]}>
                                <Input placeholder='Enter Your Fee-Per-Consultation' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label='Timings' name="timings" rules={[{ required: true, message: 'Please input your timings!', },]}>
                                <TimePicker.RangePicker format="HH:mm"/>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} lg={8}></Col>
                        <Col xs={24} md={24} lg={8}>
                            <button className='btn btn-primary btnSubmit' type='submit'>Update</button>
                        </Col>
                    </Row>
                </fieldset>
            </Form>)}
    </Layout>
  )
}

export default DoctorProfile
