import React, { Component } from 'react';
import NavSession from './session/NavSession';

class Feed extends Component {
  render() {
    return (
      <div>
        <NavSession />
        <h1>This is the page for showing the news feed</h1>
      </div>
    );
  }
}

export default Feed;
