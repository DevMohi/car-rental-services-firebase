import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    // id die access kora use params 
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Welcome To Detail : {serviceId} </h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;