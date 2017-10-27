import React, { Component } from 'react';
import './QuoteFinder.css';
import axios from 'axios';
import ronswanson from '../assets/ronswanson.png';

export default class QuoteFinder extends Component{
    constructor() {
        super();

        this.state = {
            quote:"Click Ron's head to receive pure, unadulterated wisdom.",
            url: 'http://ron-swanson-quotes.herokuapp.com/v2/',
        }
    }

    getQuote() {
        axios.get(this.state.url + 'quotes')
        .then((resp) => {
            this.setState({
                quote: resp.data[0]
            })
        })
    }

    render() {
        return(
            <main className="landing">
                <container className="useForTransparency">
                    <img src={ronswanson} className="ronSwansonHead" alt="Ron Swanson" onClick={() => {this.getQuote()}}/>
                    <div className="quoteBox">
                        <div className="quote">{this.state.quote}</div>
                    </div>
                </container>
            </main>
        )
    }
}