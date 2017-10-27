import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="main_header">
                <header className="banner">
                    <div className="headerText1">RON SWANSON</div>
                    <div className="headerText2">FOR</div>
                    <div className="headerText3">PRESIDENT</div>
                </header>
            </div>
        )
    }
}