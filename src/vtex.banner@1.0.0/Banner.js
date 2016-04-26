import React, { Component } from 'vtex.react/react';
import { hello } from 'npm.lodash/lib';

export default class App extends Component {
  render() {
    return (
      <h1>{hello()}</h1>
    );
  }
}
