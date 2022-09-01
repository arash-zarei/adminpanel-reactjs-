import React from 'react';

//Gif
import loading from '../images/loading.gif'

const Loading = () => {
    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <img style={{width: '50%'}} src={loading} alt="loading..." />
        </div>
    );
};

export default Loading;