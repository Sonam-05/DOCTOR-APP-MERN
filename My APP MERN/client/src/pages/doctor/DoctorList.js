import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Layout from '../../components/Layout'

const DoctorList = ({ doctor }) => {
    const navigate = useNavigate()
    return (
        <section>
            <h3 className='doctorListTitle'>Doctor List</h3>
            <div onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)} className="card border-dark mb-3" style={{maxWidth: "18rem", cursor:"pointer"}}>
                <div style={{color : 'darkblue'}} className="card-header text-center">Dr. {doctor.firstName} {doctor.lastName}</div>
                <div className="card-body">
                    <p className="card-text">
                        <strong>Specialization : </strong> {doctor.specialization}
                    </p>
                    <p className="card-text">
                        <strong>Experience : </strong> {doctor.experience}
                    </p>
                    <p className="card-text">
                        <strong>Fees-Per Consultation : </strong> {doctor.consultationFee}
                    </p>
                    <p className="card-text">
                        <strong>Timings : </strong> {doctor.timings[0]} - {doctor.timings[1]}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DoctorList
