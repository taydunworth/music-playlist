import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';
import PlayListItem from './PlayListItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayList>
          <PlayListForm />
          <PlayListItem />
        </PlayList>
      </div>
    );
  }
}

export default App;
