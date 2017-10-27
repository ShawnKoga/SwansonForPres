import React, { Component } from 'react';
import './VideoSection.css';

export default class SecondVideo extends Component {
    render() {
        return (
            <div className="videoBox">
                <iframe title="Meat Regime" className="video" src="https://www.youtube.com/embed/TCp2-XVatIE?start=35&end=235" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}
