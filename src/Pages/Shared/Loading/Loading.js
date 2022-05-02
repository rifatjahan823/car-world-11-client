import React from 'react';

const Loading = () => {
    return (
        <div style={{height:"400px"}}>
        <div className='w-100 d-flex justify-content-center align-iems-center'>
        <div className="spinner-border text-primary" role="status">
         <span className="visually-hidden">Loading...</span>
    </div>
    </div>
   </div>
    );
};

export default Loading;