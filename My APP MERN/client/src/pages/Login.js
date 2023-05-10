import React from 'react'
import './register.css'
import axios from 'axios'
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log(values);
    try{
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/login', values);
      dispatch(hideLoading())
      if(res.data.success){
        navigate('/');
        message.success(res.data.message);
        localStorage.setItem("token", res.data.token)
      }else{
        message.error(res.data.message)
      }
    }catch(error){
      dispatch(hideLoading())
      console.log(error);
      message.error('Something went wrong')
    }
    window.location.reload();
  };

  return (
    <div className='Register'>
      <Form className='FormCon' onFinish={onFinish} autoComplete='off'>
        <section className="formSection">
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!', },]}>
          <Input placeholder='Enter your email-id'/>
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]}>
          <Input placeholder='Enter your password'/>
        </Form.Item>

        <section className="buttonSection">
        <Link to='/register'>Not a user, Sign Up.</Link>
        <button className='btn btn-primary'>Submit</button>
        </section>
        </section>
      </Form>
    </div>
  )
}

export default Login
