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
    const {song} = this.props
    return (
    <div className="songCard">
      <h3><i className="fa fa-music" aria-hidden="true"></i></h3>
      <p><strong>User:</strong> {song.userName}</p>
      <p><strong>Artist/Band:</strong> {song.songArtist}</p>
      <p><strong>Song Title:</strong> "{song.songTitle}"</p>
      <p><strong>Notes:</strong> {song.songNotes}</p>
    </div>
  )
  }
}

export default PlayListItem
