import React, { Component } from 'react';
import './reset.css';
import QuoteFinder from './Components/QuoteFinder';
import FavoriteVoter from './Components/FavoriteVoter';
import VideoSection from './Components/VideoSection';
import Header from './Components/Header.js';
import SecondVideo from './Components/SecondVideo.js'

export default class App extends Component {

  render() {
    return (
      <main>

        <section>
          <Header />
        </section>

        <section>
          <QuoteFinder />
        </section>

        <section className="videoSection">
          <VideoSection />
        </section>

        <section>
          <FavoriteVoter />
        </section>

        <section>
          <SecondVideo />
        </section>

      </main>
    );
  }
}
