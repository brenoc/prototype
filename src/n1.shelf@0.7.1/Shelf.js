import React, { Component } from 'vtex.react/react';
import { bye } from 'npm.lodash/lib';

export default class App extends Component {
  render() {
    return (
      <h1>{bye()}</h1>
    );
  }
}
