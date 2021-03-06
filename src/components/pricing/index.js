import React, { Component } from 'react';

import Zoom from 'react-reveal/Zoom';
import MyButton from '../utils/MyButton'

export default class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        ],
        linkTo: [
            'https://www.youtube.com',
            'https://www.youtube.com',
            'https://www.youtube.com',
        ],
        delay: [250, 0, 350]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className='pricing_item'>
                    <div className='pricing_inner_wrapper'>
                        <div className='pricing_title'>
                            <span>${this.state.prices[i]}</span>
                            <span>${this.state.positions[i]}</span>
                        </div>
                        <div className='pricing_description'>
                            {this.state.desc[i]}
                        </div>
                        <div className='pricing_buttons'>
                            <MyButton url={this.state.linkTo[i]} text='Purchase ticket' bg_color='#ffa800' />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Pricing</h2>
                    <div className='pricing_wrapper'>
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}
