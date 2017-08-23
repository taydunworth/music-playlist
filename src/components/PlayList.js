import React, { Component } from 'react';

export default class PlayList extends Component {
  render(){
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
}
