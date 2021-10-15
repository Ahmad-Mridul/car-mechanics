import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className='col-lg-4 col-sm-6 col-12'>
            <img src={img} alt="" width='350px' height='200px' />
            <h2>Name:{name}</h2>
            <h3 className='text-danger'>Expertize: {expertize}</h3>
        </div>
    );
};

export default Expert;