import React from 'react';
import Carrousel from './Carrousel';
import TimeUtil from './TimeUtil';

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Carrousel></Carrousel>
            <div className='artist_name'>
                <div className='wrapper'>
                    {'parookaville'.toUpperCase()} 2020
                </div>
            </div>
            <TimeUtil>

            </TimeUtil>
        </div>
    );
};

export default Featured;