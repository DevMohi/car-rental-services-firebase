import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // controlled input e kibave changes anbe 
    // const [user, setUser] = useState({
    //     name: 'Akbar',
    //     emaik: 'akbar@momotaz',
    //     address: 'Tajmohol',
    //     phone: '07177777777'
    // });

    // const handleAdressChange = event => {
    //     console.log(event.target.value)
    //     const { address, ...rest } = user;
    //     const newAdress = event.target.value;
    //     const newUser = { address: newAdress, ...rest };
    //     console.log(newUser)
    //     setUser(newUser)

    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast("Your order is booked")
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order : {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name="name" value={user?.displayName} placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" name="email" value={user?.email}
                    placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2'
                    readOnly
                    type="service" value={service.name} name="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-2'

                    type="address" name="address" placeholder='address' required autoComplete='off' />
                <br />
                <input className='w-100 mb-2' type="phone" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default Checkout;