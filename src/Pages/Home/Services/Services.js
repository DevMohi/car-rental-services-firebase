import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'




const Services = () => {

    const [services] = useServices();

    return (
        <div id='services' className='container'>
            <div className="row">
                <h2 className='text-primary text-center mt-5'>Our Services</h2>
                <div className='services-container'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;