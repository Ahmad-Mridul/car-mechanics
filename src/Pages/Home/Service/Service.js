import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, price, img, description, duration } = props.service;
    return (
        <div className='service'>
            <img src={img} alt="" width='400px' height='200px' />
            <h3>Service: {name}</h3>
            <h3>Price: {price}</h3>
            <h3>Duration: {duration}</h3>
            <h4 className='px-3' style={{ textAlign: 'justify' }}>Description: {description}</h4>
        </div>
    );
};

export default Service;