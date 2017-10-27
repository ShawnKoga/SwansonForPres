import React, { Component } from 'react';
import './VideoSection.css';

export default class VideoSection extends Component {
    render() {
        return (
            <div className="videoBox">
                <iframe title="Swanson Burger" className="video" src="https://www.youtube.com/embed/tq2CwGgz73Q?start=10&end=202" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
} 