import React from 'react';
import Fade from 'react-reveal/Fade';
const Footer = (props) => {
    return (
        <footer className='bck_red'>
            <Fade delay={500}>
                <div className='font_rightteous footer_logo_venue'>The Venue</div>
                <div className='footer_copyright'>the Venue 2019. All rights reserved.</div>
            </Fade>
        </footer>
    )
}

export default Footer;