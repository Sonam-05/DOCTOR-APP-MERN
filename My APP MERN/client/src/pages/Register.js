import React from 'react'
import './register.css'
import { Form, Input, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';

const Register =  () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log(values);
    try{
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/register', values);
      dispatch(hideLoading())
      if(res.data.success){
        message.success(res.data.message)
        navigate('/login')
      }else{
        message.error(res.data.message)
      }
    }catch(error){
      dispatch(hideLoading())
      console.log(error);
      message.error('Something went wrong')
    }

  };

  return (
    <div className='Register'>
      <Form className='FormCon' onFinish={onFinish} autoComplete='off'>
        <section className="formSection">
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!', },]}>
          <Input placeholder='Enter your name'/>
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your username!', },]}>
          <Input placeholder='Enter your email-id'/>
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]}>
          <Input placeholder='Enter your password'/>
        </Form.Item>

        <section className="buttonSection">
        <Link to='/login'>Already a user, Sign In.</Link>
        <button className='btn btn-primary'>Submit</button>
        </section>
        </section>
      </Form>
    </div>
  )
}

export default Register
