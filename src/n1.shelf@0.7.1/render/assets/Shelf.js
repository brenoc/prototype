import React, { Component } from 'npm.react/react';
import { bye } from 'npm.lodash/lib';

export default class Shelf extends Component {
  render() {
    return (
      <h1>Shelf settings: {this.props.settings.bar}</h1>
    );
  }
}
