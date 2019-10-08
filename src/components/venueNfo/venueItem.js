import React from 'react';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const VanueItem = () => {
    return (
        <div className='center_wrapper'>
            <div className='vn_wrapper'>
                <Zoom duration='500'>
                    <div className='vn_item'>
                        <div className='vn_outer'>
                            <div className='vn_inner'>
                                <div className='vn_icon_square bck_red' />
                                <div className='vn_icon' style={{ background: `url(${icon_calendar})` }} />
                                <div className='vn_title'>
                                    Eevent Date & Time
                        </div>
                                <div className='vn_desc'>
                                    31 December 2019 @24.00 pm
                        </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom duration='500' delay='250'>
                    <div className='vn_item'>
                        <div className='vn_outer'>
                            <div className='vn_inner'>
                                <div className='vn_icon_square bck_yellow' />
                                <div className='vn_icon' style={{ background: `url(${icon_location})` }} />
                                <div className='vn_title'>
                                    Eevent Location
                        </div>
                                <div className='vn_desc'>
                                    345 Speer Street Oakland, CA 9835
                        </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default VanueItem;