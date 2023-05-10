import React from 'react'
import './spinner.css'

const Spinner = () => {
    return (
        <div className='Spinner'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
