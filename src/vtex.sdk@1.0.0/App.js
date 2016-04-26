import React, { Component } from 'vtex.react/react.js';
import Banner from 'vtex.banner/Banner.js';
import Shelf from 'n1.shelf/Shelf.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <Shelf/>
      </div>
    );
  }
}
