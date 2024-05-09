import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex items-center'>
                <span className="loading loading-spinner loading-xs"></span>
                <span className="loading loading-spinner loading-sm"></span>
                <span className="loading loading-spinner loading-md"></span>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </div>
    );
};

export default Loading;