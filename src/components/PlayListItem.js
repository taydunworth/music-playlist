import React, { Component } from 'react';

class PlayListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }
  render() {
    let songs = this.state.songs.map(song => {
      return (
        <div key={song._id}>
          <p>User: {song.userName}</p>
          <p>Artist/Band: {song.songArtist}</p>
          <p>Title: {song.songTitle}</p>
          <p>Notes: {song.songNotes}</p>
        </div>
      )
    })
    return (
      <div>
        <div className="row">{songs}</div>
      </div>
    )
  }
}

export default PlayListItem
