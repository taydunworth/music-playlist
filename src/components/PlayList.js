import React, { Component } from 'react';

export default class PlayList extends Component {
  render(){
    return (
      <div>
        <p>Playlist</p>
        {this.props.children}
      </div>
    );
  }
}
