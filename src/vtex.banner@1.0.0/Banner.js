import React, { Component } from 'npm.react/react';
import { hello } from 'npm.lodash/lib';

export default class Banner extends Component {
  render() {
    return (
      <h1>Banner settings: {this.props.settings.foo}</h1>
    );
  }
}
