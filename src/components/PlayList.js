import React, { Component } from 'react';
import PlayListItem from "./PlayListItem"

export default class PlayList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  fetchData = e => {
   e.preventDefault();
   fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
     return results.json();
   }).then(data => {
     this.setState({songs: data});
   })
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
   }

  render(){
    let songs = this.state.songs.map(song => {
      return <PlayListItem key={song._id} song={song} />
    })

    return (
        <div className="listOfSongs">
          <button onClick={this.fetchData}>Update Playlist</button>
          {songs}
        </div>
    )
  }
}
