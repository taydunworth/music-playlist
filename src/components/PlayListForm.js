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
    this.fetchData = this.fetchData.bind(this);
  }

  _change = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  fetchData(e) {
   e.preventDefault();
   fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
     return results.json();
   }).then(data => {
     this.setState({songs: data});
   })
  }

  addToList(e) {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
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

  render() {
    return (
      <div>
        <form>
          <label htmlFor="userName">Username</label>
          <input type="text" onChange={this._change} name="userName"  value={this.state.userName} />
          <label htmlFor="songArtist">Artist/Band</label>
          <input type="text" onChange={this._change} name="songArtist"  value={this.state.songArtist} />
          <label htmlFor="songTitle">Song Title</label>
          <input type="text" onChange={this._change} name="songTitle"  value={this.state.songTitle} />
          <label htmlFor="songNotes">Notes about Song</label>
          <textarea onChange={this._change} name="songNotes"  value={this.state.songNotes} />
          <div className="btn-box">
            <button onClick={this.fetchData}>Submit</button>
            <button onClick={this.addToList}>Update</button>
          </div>
        </form>
      </div>
    )
  }
}
