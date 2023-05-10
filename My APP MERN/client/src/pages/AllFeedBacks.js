import React, { useEffect, useState } from 'react'
import { message } from 'antd';
import axios from 'axios';
import './allFeedbacks.css'

const AllFeedBacks = () => {

    const [feedbacks, setFeedbacks] = useState(null);

    const readAllFeedbacksFunc = async () => {
        try {
            const res = await axios.get('/api/v1/feeds/getAllFeedbacks');
            if (res.data.success) {
                setFeedbacks(res.data.data)
            }
        } catch (error) {
            console.log(error);
            message.error('Something went wrong')
        }
    };

    useEffect(() => {
        readAllFeedbacksFunc()
    }, [])

  return (
    <div className='AllFeedBacks'>
      <h2>Feedbacks</h2>
      {feedbacks && feedbacks.map((singleObj, index) => {
        return <section key={index}>
            <section className="allFeedbacksContainer">
            <h6>Name : {singleObj.username}</h6>
            <h6>Email : {singleObj.email}</h6>
            <p>Feedback : {singleObj.remark}</p>
            </section>
        </section>
      })}
    </div>
  )
}

export default AllFeedBacks
