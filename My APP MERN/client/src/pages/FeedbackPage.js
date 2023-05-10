import React from 'react'
import { Button, Form, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios'
import './feedback.css'
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const FeedbackPage = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log(values);
        try {
            const res = await axios.post('/api/v1/feeds/feedback', { ...values }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (res.data.success) {
                message.success(res.data.message);
                navigate('/doctor-list')
            }
        } catch (error) {
            console.log(error);
            message.error('Something went wrong')
        }
    };

    return (
        <Layout>
            <div className='Feedback'>
                <h3>Testimonials</h3>
                <section className="feedBackFormContainer">
                    <Form
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <fieldset>
                            <legend>Feedback</legend>
                            <Form.Item label="Name" name="username"
                                rules={[{ required: true, message: 'Please input your username!' },]}>
                                <Input />
                            </Form.Item>

                            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' },]}>
                                <Input />
                            </Form.Item>

                            <Form.Item label="Remark" name="remark"
                                rules={[{ required: true, message: 'Please input your message!' },]}>
                                <TextArea />
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </fieldset>
                    </Form>

                </section>

            </div>
        </Layout>
    )
}

export default FeedbackPage
