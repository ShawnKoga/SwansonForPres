import React, { Component } from 'react';
import './FavoriteVoter.css';
import axios from 'axios';

export default class FavoriteVoter extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            thingsToDisplay: []
        }
    }

    componentDidMount() {
        this.getThings();
    }

    getThings() {
        axios.get('/api/things')
            .then((resp) => {
                this.setState({
                    thingsToDisplay: resp.data
                })
            })
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    submitNewThing(e) {
        var newThing = {
            title: e
        }
        axios.post('/api/things', newThing)
            .then((resp) => {
                this.setState({
                    thingsToDisplay: resp.data
                })
            })
    }

    deleteThing(id) {
        axios.delete('/api/things/' + id)
            .then((resp) => {
                this.setState({
                    thingsToDisplay: resp.data
                })
            })
    }

    changeVote(dir, id) {
        axios.patch('/api/things/' + id + '/' + dir)
            .then((resp) => {
                this.setState({
                    thingsToDisplay: resp.data
                })
            })
    }

    resetData() {
        axios.get('/api/reset')
            .then((resp) => {
                this.setState({
                    thingsToDisplay: resp.data
                })
            })
    }

    render() {
        const favoriteThings = this.state.thingsToDisplay.filter((e) => {
            return e.votes > 0
        }).map((c, i, a) => {
            return (
                <div key={i}>
                    <div className="thingTitle">
                        {c.title}
                    </div>
                    <div className="thingVotes">
                        Votes: {c.votes}
                    </div>
                    <div className="buttons">
                        <button className="voteButton" onClick={() => { this.changeVote('up', c.id) }}>upVote</button>
                        <button className="voteButton" onClick={() => { this.changeVote('down', c.id) }}>downVote</button>
                        <button className="voteButton" onClick={() => { this.deleteThing(c.id) }}>Delete</button>
                    </div>
                </div>
            )
        })

        const dislikeThings = this.state.thingsToDisplay.filter((e) => {
            return e.votes <= 0
        }).map((c, i, a) => {
            return (
                <div key={i}>
                    <div className="thingTitle">
                        {c.title}
                    </div>
                    <div className="thingVotes">
                        Votes: {c.votes}
                    </div>
                    <div className="buttons">
                        <button className="voteButton" onClick={() => { this.changeVote('up', c.id) }}>upVote</button>
                        <button className="voteButton" onClick={() => { this.changeVote('down', c.id) }}>downVote</button>
                        <button className="voteButton" onClick={() => { this.deleteThing(c.id) }}>Delete</button>
                    </div>
                </div>
            )
        })

        return (
            <main className="ronsFavsSection">
                <div className="categoryBox">
                    <h2>LIKES</h2>
                    <div>{favoriteThings}</div>
                </div>
                <div className="inputArea">
                    <div className="inputTitle">
                        <h1>RON'S</h1>
                        <h1>LIKES / DISLIKES</h1>
                    </div>
                    <input className="favOrHate" value={this.state.userInput} onChange={(e) => { this.handleChange(e) }} />
                    <button className="submitButton" onClick={() => { this.submitNewThing(this.state.userInput) }}>SUBMIT</button>
                    <div className="textContainer">
                        <li>Vote whether or not you think Ron likes something listed.</li>
                        <br />
                        <li>Add or delete things for voting.</li>
                        <br />
                        <li>Ron wouldn't bother with things with 0 votes or less, so those appear in the dislikes column.</li>
                    </div>
                    <button className="resetButton" onClick={() => { this.resetData() }}>Reset Data</button>
                </div>
                <div className="categoryBox">
                    <h2>DISLIKES</h2>
                    <div>{dislikeThings}</div>
                </div>
            </main>
        )
    }
}