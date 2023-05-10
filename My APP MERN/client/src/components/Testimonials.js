import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import './testimonials.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Testimonials = () => {
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState(null);

    const getAllFeedbacksFunc = async () => {
        try {
            const res = await axios.get('/api/v1/feeds/getAllFeedbacks');
            if (res.data.success) {
                setFeedback(res.data.data)
            }
        } catch (error) {
            console.log(error);
            message.error('Something went wrong')
        }
    };

    useEffect(() => {
        getAllFeedbacksFunc()
    }, [])

    return (
        <div>{feedback && (<div className='Testimonials' id='Testimonials'>
            <h3>Testimonials</h3>
            <section className="testimonialsSectionContainer">
                <section className="carouselSection">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <section className="ImageSec">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="d-block w-100" alt="..." />
                                <h3>{feedback[0].username}</h3>
                                <h5>{feedback[0].email}</h5>
                                <p>{feedback[0].remark}</p>
                                </section>
                            </div>
                            <div className="carousel-item">
                            <section className="ImageSec">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="d-block w-100" alt="..." />
                                <h3>{feedback[1].username}</h3>
                                <h5>{feedback[1].email}</h5>
                                <p>{feedback[1].remark}</p>
                                </section>
                            </div>
                            <div className="carousel-item">
                            <section className="ImageSec">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="d-block w-100" alt="..." />
                                <h3>{feedback[2].username}</h3>
                                <h5>{feedback[2].email}</h5>
                                <p>{feedback[2].remark}</p>
                                </section>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>


                <section className="feedbackSection">
                    <Form
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
                                <Button onClick={() => { navigate('/login') }} type="primary" htmlType="submit">
                                    Submit
                                </Button> <br /> <Link to='/readAllFeedbacks' className='readAllFeedbacks' target='_blank'>Read All Feedbacks</Link>
                            </Form.Item>
                        </fieldset>
                    </Form>
                </section>
            </section>
        </div>)}
        </div>
    )
}

export default Testimonials
