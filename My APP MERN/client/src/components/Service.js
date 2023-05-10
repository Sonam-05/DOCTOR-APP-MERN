import React from 'react'
import './service.css'
import wetCupping from './images/wet-cupping.jpeg'
import dryCupping from './images/dry-cupping.jpeg';
import bambooCupping from './images/bamboo cupping.jpeg';
import fireCupping from './images/fire-cupping.jpeg';
import emsCupping from './images/ems-cupping.jpeg';


const Service = () => {
    return (
        <div className='Service' id='service'>
            <h2 className="serviceTitle">Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 serviceImagesContainer">
                <div className="col">
                    <div className="card h-100">
                        <img src={wetCupping} className="card-img-top" alt="WetCupping-Photo" />
                        <div className="card-body serviceContentDiv">
                            <h5 className="card-title">Wet Cupping</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={dryCupping} className="card-img-top" alt="DryCupping-Photo" />
                        <div className="card-body serviceContentDiv">
                            <h5 className="card-title">Dry Cupping</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={bambooCupping} className="card-img-top" alt="BambooCupping-Photo" />
                        <div className="card-body serviceContentDiv">
                            <h5 className="card-title">Bamboo Cupping</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={fireCupping} className="card-img-top" alt="BambooCupping-Photo" />
                        <div className="card-body serviceContentDiv">
                            <h5 className="card-title">Fire Cupping</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={emsCupping} className="card-img-top" alt="BambooCupping-Photo" />
                        <div className="card-body serviceContentDiv">
                            <h5 className="card-title">EMS Cupping</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
