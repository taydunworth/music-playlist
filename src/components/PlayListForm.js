import React, { Component } from 'react'

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }

  addToList = e => {
    e.preventDefault();
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });

    this.setState({userName: '', songArtist: '', songTitle: '', songNotes:''});
  }

  _change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="formBox">
        <h2>Add to the Playlist</h2>
        <form onSubmit={this.addToList}>
          <label htmlFor="userName">Username</label>
          <input type="text" onChange={this._change} name="userName"  value={this.state.userName} required />
          <label htmlFor="songArtist">Artist/Band</label>
          <input type="text" onChange={this._change} name="songArtist"  value={this.state.songArtist} required />
          <label htmlFor="songTitle">Song Title</label>
          <input type="text" onChange={this._change} name="songTitle"  value={this.state.songTitle} required />
          <label htmlFor="songNotes">Notes about Song</label>
          <textarea onChange={this._change} name="songNotes"  value={this.state.songNotes} />
          <div className="btn-box">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
