import React from 'react';

const MapLocation = (props) => {
    return (
        <div className='location_wrapper'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.2671759740456!2d7.127546316085872!3d51.47160997962922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2d041f317ad%3A0xa5283b737c85db45!2smeeva%20GmbH!5e0!3m2!1sde!2sde!4v1570536270563!5m2!1sde!2sde"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    )
}

export default MapLocation;